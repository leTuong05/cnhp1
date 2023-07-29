import React, { useEffect, useState } from "react";
import { Card, Row, Space, message } from "antd";
import { Button, Table } from "antd";
import { ButtonAddUnits, Wapper, WapperTable } from "../Style/style";
import { Modal } from "antd";
import ModalAddUnits from "../../pages/Administrator/Units/ModalAddUnits";
import SearchStatus from "../../pages/Administrator/Units/SearchStatus";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDeteleManageTeam,
  fetchgetList,
} from "../../reducers/managementTeamSlice";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import edit from "../../common/images/imageHome_page/edit.png";
import xoa from "../../common/images/imageHome_page/delete.png";

const data = [];
for (let i = 0; i < 9; i++) {
  data.push({
    // key: i,
    stt: i,
    account: `account${i}`,
    maToQuanLy: `maToQuanLy ${i}`,
    tenToQuanLy: `tenToQuanLy ${i}`,
    sdt: `sdt ${i}`,
    address: `address ${i}`,
    khuVuc: `khuVuc ${i}`,
    nv: `nv ${i}`,
    status: `status ${i}`,
  });
}

const TableCommon = (props) => {
  const { title } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [isVisible, setIsVisiable] = useState(false);

  const [valueIDDelete, setValuIDDelete] = useState("");

  const [valueRecord, setValueRecord] = useState(null);

  const dispatch = useDispatch();

  const [mode, setMode] = useState("add"); // Thêm mới là chế độ mặc định

  const columnsToQuanLy = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tài khoản",
      dataIndex: "UserName",
    },
    {
      title: "Mã tổ quản lý",
      dataIndex: "ManagementTeamCode",
    },
    {
      title: "Tên tổ quản lý",
      dataIndex: "ManagementTeamName",
    },
    {
      title: "Số điện thoại",
      dataIndex: "PhoneNumber",
    },
    {
      title: "Địa chỉ",
      dataIndex: "Address",
    },
    {
      title: "Khu vực quản lý",
      dataIndex: "RegionName",
    },
    {
      title: "Nhân viên",
      dataIndex: "UserNameEmployee",
    },
    {
      title: "Trạng thái",
      dataIndex: "ManagementTeamStatus",
      render: (text, record) => (
        <Space>
          <div onClick={() => handleEdit(record)}>
            <img src={edit}></img>
          </div>
          <div onClick={() => handleDelete(record)}>
            <img src={xoa}></img>
          </div>
        </Space>
      ),
    },
  ];

  const handleEdit = (record) => {
    setIsVisiable(true);
    setMode("edit");
    setSelectedRow(record);
  };

  useEffect(() => {
    setSelectedRow(valueRecord);
  }, [valueRecord]);

  const getList = () => {
    dispatch(
      fetchgetList({
        PageSize: 20,
        CurrentPage: currentPage,
        TextSearch: "",
        ManagementTeamStatus: "",
        ProvinceID: "",
        DistrictID: "",
        WardID: "",
      })
    );
  };

  useEffect(() => {
    getList();
  }, []);

  //DELETE
  // setValuIDDelete(record.ManagementTeamID);
  const handleDelete = (record) => {
    Modal.confirm({
      title: "Xóa",
      content: "Bạn chắc chắn muốn xóa tổ quản lý này không?",
      onOk: () => {
        dispatch(fetchDeteleManageTeam(record.ManagementTeamID)).then(() => {
          getList();
          message.success("Xóa thành công");
        });
      },
    });
    getList();
  };

  const listManage = useSelector(
    (state) => state?.manage?.listMagagementTeam?.listAllStatus?.Object
  );

  const handleShowModal = () => {
    setIsVisiable(true);
    setMode("add"); // Đặt chế độ là Thêm mới khi mở Modal
  };
  const handleHideModal = () => {
    setIsVisiable(false);
    setSelectedRow(null);
  };

  const isShowModal = () => {
    setIsVisiable(true);
  };

  const showModal = () => {
    setIsVisiable(true);
  };

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  //FEATURE SEARCH
  const onSearch = (value) => {
    dispatch(
      fetchgetList({
        PageSize: 20,
        CurrentPage: currentPage,
        TextSearch: value,
        ManagementTeamStatus: "",
        ProvinceID: "",
        DistrictID: "",
        WardID: "",
      })
    );
  }

  //Loc Trang thai
  const onChangeStatus = (value) => {
    const valueInt = parseInt(value);
    dispatch(
      fetchgetList({
        PageSize: 20,
        CurrentPage: currentPage,
        TextSearch: "",
        ManagementTeamStatus: valueInt,
        ProvinceID: "",
        DistrictID: "",
        WardID: "",
      })
    );
  }

  const pagination = {
    current: currentPage,
    pageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100'],
  };

  return (
    <>
      <SearchStatus onSearch={onSearch} onChangeStatus={onChangeStatus}/>
      <Wapper>
        <Card
          title={title}
          bordered={false}
          style={{
            width: "100%",
          }}
        >
          <div>
            <div
              style={{
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  marginLeft: 8,
                }}
              ></span>
            </div>
            <WapperTable
              columns={columnsToQuanLy}
              dataSource={listManage}
              bordered
              pagination={pagination}
            />
          </div>
        </Card>

        <ButtonAddUnits
          type="primary"
          style={{ background: "var(--btn-primary-color)" }}
          onClick={handleShowModal}
        >
          Thêm tổ quản lý
        </ButtonAddUnits>

        <ModalAddUnits
          title={mode == "add" ? "Thêm tổ quản lý" : "Sửa tổ quản lý"}
          handlehideModal={handleHideModal}
          isModalVisiable={isVisible}
          selectedRow={selectedRow}
          mode={mode}
        />
      </Wapper>
    </>
  );
};

export default TableCommon;
