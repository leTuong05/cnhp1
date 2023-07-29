import { useEffect, useState } from "react";
import CustomTable from "../../../../components/Table";
import { Button, Modal, Tooltip } from "antd";
import {
  DeleteWaterConfig,
  getWaterConfig,
} from "../../../../services/apis/WaterConfig";
import { WaterConfigTableStyle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditModal from "./Modal/EditModal";

import { DeleteOutlined } from "@ant-design/icons";
const { confirm } = Modal;
const WaterConfigTable = ({ type }) => {
  const [id, setId] = useState("");
  const [data, setData] = useState();
  const [buttonShow, SetButtonShow] = useState(null);
  const [loading, setLoading] = useState();
  const [isEdit, setIsEdit] = useState();
  const [openEdit, setOpenEdit] = useState();
  const [openDelete, setOpenDelete] = useState();

  const handleDelete = (id) => {
    setLoading(true);
    DeleteWaterConfig(id)
      .then((values) => {
        console.log(values);
      })
      .finally(() => {
        setLoading(false);
        getList();
      });
  };

  const showDeleteConfirm = (record) => {
    confirm({
      title: "Xóa",
      icon: <DeleteOutlined />,
      content: (
        <div>
          <span>Bạn có chắc chắn muốn xoá </span>
          <span
            style={{
              fontWeight: "700",
            }}
          >
            {record?.WaterPriceTitle}
          </span>
          <span> không?</span>
        </div>
      ),
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk() {
        handleDelete(record?.WaterPriceID);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const TableTitle =
    type === 1
      ? "MỨC SỬ DỤNG NƯỚC SINH HOẠT CỦA HỘ DÂN CƯ (M3/THÁNG/HỘ)"
      : "MỤC ĐÍCH SỬ DỤNG";
  const columns = [
    {
      title: "STT",
      dataIndex: "Index",
      key: "Index",
      render: (text, record, index) => <div className="index">{index + 1}</div>,
    },
    {
      title: TableTitle,
      dataIndex: "WaterPriceTitle",
      key: "WaterPriceTitle",
    },
    {
      title: "GIÁ BÁN (VND/M3)",
      dataIndex: "WaterPrice",
      key: "WaterPrice",
      render: (text, record, index) => (
        <div className="WaterPrice-box">
          <span className="water-price-text">{text}</span>
          {buttonShow === index && (
            <div className="icon-button-box">
              <div>
                <Tooltip title="sửa" className="ml">
                  <Button
                    shape="circle"
                    onClick={() => {
                      setIsEdit(true);
                      setOpenEdit(record);
                    }}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </Button>
                </Tooltip>
                <Tooltip title="xóa" className="ml">
                  <Button
                    shape="circle"
                    onClick={() => {
                      showDeleteConfirm(record);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </Tooltip>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];
  const getList = () => {
    setLoading(true);
    getWaterConfig(type)
      .then((res) => {
        if (res?.isError) return;
        setData(res?.Object);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getList();
  }, []);

  console.log(data);
  return (
    <WaterConfigTableStyle>
      <CustomTable
        columns={columns}
        bordered={true}
        dataSource={data}
        onRow={(record, rowIndex) => {
          return {
            onMouseEnter: () => {
              SetButtonShow(rowIndex);
            }, // mouse enter row
            onMouseLeave: () => {
              SetButtonShow(null);
            }, // mouse leave row
          };
        }}
      ></CustomTable>

      {!!openEdit && (
        <EditModal
          isEdit={isEdit}
          open={openEdit}
          onCancel={() => {
            setOpenEdit(false);
            getList();
          }}
        />
      )}
    </WaterConfigTableStyle>
  );
};
export default WaterConfigTable;