import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Modal,
  Row,
  Select,
  Tooltip,
} from "antd";
import { useEffect, useState } from "react";
import CustomTable from "../../../components/Table";
import TitleComponent from "../../../components/TitleComponent";
import {
  DeleteTemporarilyStopWater,
  getTemporarilyStopWater,
} from "../../../services/apis/TemporarilyStopWater";
import { DeleteOutlined } from "@ant-design/icons";

import {
  getRegion,
  getRegionAll,
  getRegionByRegionID,
} from "../../../services/apis/managementTeam";
import { TemporarilyStopWaterStyle, WrapperButton } from "./styles";
import moment from "moment";
import EditModal from "./components/EditModal";
const { RangePicker } = DatePicker;
const { confirm } = Modal;

const TemporarilyStopWater = () => {
  const [form] = Form.useForm();
  const [buttonShow, SetButtonShow] = useState(null);
  const [data, setData] = useState();
  const [listProvince, setListProvince] = useState();
  const [listDistrict, setListDistrict] = useState();
  const [isEdit, setIsEdit] = useState();
  const [modalData, setModalData] = useState();
  const [openEdit, setOpenEdit] = useState();
  const [listCommune, setListCommune] = useState();
  const [loading, setLoading] = useState();
  const [textSeach, setTextSeach] = useState({
    FromCreateDate: "",
    ToCreateDate: "",
    ProvinceID: 0,
    DistrictID: 0,
    WardID: 0,
    CalendarStatus: 0,
  });

  const getProvince = () => {
    setLoading(true);
    getRegionAll()
      .then((res) => {
        if (res?.isError) return;
        setListProvince(res?.Object);
      })
      .finally(() => setLoading(false));
  };

  const getDistrict = (id) => {
    setLoading(true);
    getRegion(id)
      .then((res) => {
        if (res?.isError) return;
        setListDistrict(res?.Object);
      })
      .finally(() => setLoading(false));
  };

  //   getRegionByRegionID

  const getCommune = (id) => {
    setLoading(true);
    getRegionByRegionID(id)
      .then((res) => {
        if (res?.isError) return;
        setListCommune(res?.Object);
      })
      .finally(() => setLoading(false));
  };

  const getData = (body) => {
    setLoading(true);
    getTemporarilyStopWater(body)
      .then((res) => {
        if (res?.isError) return;
        setData(res?.Object);
      })
      .finally(() => setLoading(false));
  };

  const seach = (date) => {
    setLoading(true);
    form
      .validateFields()
      .then((res) => {
        setTextSeach({
          ...res,
          FromCreateDate: !!date ? date[0] : "",
          ToCreateDate: !!date ? date[1] : "",
        });
      })
      .finally(() => setLoading(false));
  };

  // DeleteTemporarilyStopWater
  const handleDelete = (id) => {
    setLoading(true);
    DeleteTemporarilyStopWater(id)
      .then((res) => {
        if (res?.isError) return;
      })
      .finally(() => {
        setLoading(false);
        getData(textSeach);
      });
  };

  const showDeleteConfirm = (record) => {
    confirm({
      title: "Xóa",
      icon: <DeleteOutlined />,
      content: (
        <div>
          <span>Bạn có chắc chắn muốn xoá lịch cấp nước này không?</span>
        </div>
      ),
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk() {
        handleDelete(record?.TemporarilyStopWaterID);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "Index",
      key: "Index",
      render: (text, record, index) => <div className="index">{index + 1}</div>,
    },
    {
      title: "CÔNG TY CẤP NƯỚC",
      dataIndex: "WaterCompany",
      key: "WaterCompany",
    },
    {
      title: "NGÀY TẠO",
      dataIndex: "CreateDate",
      key: "CreateDate",
      render: (text, record, index) => (
        <span> {moment(text).format("DD/MM/YYYY")}</span>
      ),
    },
    {
      title: "THỜI GIAN",
      dataIndex: "",
      key: "",
      render: (_, record) => (
        <div>
          <span> Từ {moment(record.FromDate).format("hh:mm")}</span>
          <br />
          <span> Đến {moment(record.ToDate).format("hh:mm")}</span>
        </div>
      ),
    },

    {
      title: "KHU VỰC",
      dataIndex: "RegionName",
      key: "RegionName",
    },
    {
      title: "FILE ĐÍNH KÈM",
      dataIndex: "FileName",
      key: "FileName",
    },
    {
      title: "TRẠNG THÁI",
      dataIndex: "CalendarStatus",
      key: "CalendarStatus",
      render: (text, record, index) => (
        <div className="WaterPrice-box">
          {buttonShow === index ? (
            <div className="icon-button-box">
              <div>
                <Tooltip title="sửa" className="ml">
                  <Button
                    shape="circle"
                    onClick={() => {
                      setModalData(record);
                      setIsEdit(true);
                      setOpenEdit(true);
                      console.log(record);
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
          ) : text === 1 ? (
            <span>Mới tạo</span>
          ) : text === 2 ? (
            <span>Chờ duyệt</span>
          ) : text === 3 ? (
            <span>Đã duyệt</span>
          ) : (
            <span>Đã hủy</span>
          )}
        </div>
      ),
    },
  ];

  useEffect(() => {
    getProvince();
  }, []);

  useEffect(() => {
    getData(textSeach);
  }, [textSeach]);

  return (
    <TemporarilyStopWaterStyle>
      <Form form={form} layout="horizontal">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item>
              <RangePicker
                format="DD/MM/YYYY"
                style={{ width: "100%" }}
                onChange={(date) => {
                  seach(date);
                }}
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item name="CalendarStatus" defaultValue={0}>
              <Select
                defaultValue={0}
                style={{ width: "100%" }}
                onChange={() => {
                  seach();
                }}
              >
                <Select.Option value={0}>Tất cả</Select.Option>
                <Select.Option value={1}>Mới tạo</Select.Option>
                <Select.Option value={2}>Chờ duyệt</Select.Option>
                <Select.Option value={3}>Đã duyệt</Select.Option>
                <Select.Option value={4}>Đã hủy</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          {/* tỉnh */}
          <Col span={4}>
            <Form.Item name="ProvinceID" defaultValue={0}>
              <Select
                defaultValue={0}
                style={{ width: "100%" }}
                onChange={(value) => {
                  !!value ? getDistrict(value) : setListDistrict([]);
                  form.setFieldValue("DistrictID", 0);
                  form.setFieldValue("WardID", 0);
                  seach();
                }}
              >
                <Select.Option value={0}>Tất cả</Select.Option>
                {listProvince?.map((item, idx) => (
                  <Select.Option value={item?.RegionID}>
                    {item?.RegionName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {/* huyện */}
          <Col span={4}>
            <Form.Item name="DistrictID" defaultValue={0}>
              <Select
                defaultValue={0}
                style={{ width: "100%" }}
                onChange={(value) => {
                  !!value ? getCommune(value) : setListCommune([]);
                  form.setFieldValue("WardID", 0);
                  seach();
                }}
              >
                <Select.Option value={0}>Tất cả</Select.Option>
                {listDistrict?.map((item, idx) => (
                  <Select.Option value={item?.RegionID}>
                    {item?.RegionName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {/* Xã */}
          <Col span={4}>
            <Form.Item name="WardID" defaultValue={0}>
              <Select
                defaultValue={0}
                style={{ width: "100%" }}
                onChange={(value) => {
                  seach();
                }}
              >
                <Select.Option value={0}>Tất cả</Select.Option>
                {listCommune?.map((item, idx) => (
                  <Select.Option value={item?.RegionID}>
                    {item?.RegionName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <TitleComponent title={"Lịch tạm ngừng cấp nước"}>
        <WrapperButton>
          <Button
            onClick={() => {
              setIsEdit(true);
              setOpenEdit(true);
            }}
          >
            Thêm
          </Button>
        </WrapperButton>
      </TitleComponent>

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
          data={modalData}
          onCancel={() => {
            setOpenEdit(false);
            getData(textSeach);
          }}
        />
      )}
    </TemporarilyStopWaterStyle>
  );
};
export default TemporarilyStopWater;
