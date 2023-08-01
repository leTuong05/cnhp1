import React, { useEffect, useState } from "react";
import { getOverview } from "../../../services/apis/overview";
import {
  fetchDetailsOverView,
  fetchOverView,
} from "../../../reducers/overViewSlice";
import { Card } from "antd";
import { Button, Dropdown, Modal, DatePicker } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { Col, Divider, Row } from "antd";
import img1 from "../../../common/images/imageAdministrator_page/tongbaoicon1.svg";
import img2 from "../../../common/images/imageAdministrator_page/thongbaoicon2.svg";
import img3 from "../../../common/images/imageAdministrator_page/thongbaoicon3.svg";
import img4 from "../../../common/images/imageAdministrator_page/thongbaoicon4.svg";
import img5 from "../../../common/images/imageAdministrator_page/thongbaoicon5.svg";
import img6 from "../../../common/images/imageAdministrator_page/thongbaoicon6.svg";
import { Dots } from "../../../styles";
import { Wapper, WapperModal } from "./style";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import TableComponent from "./Taable";
import Modals from "./Modals";
import ModalListCustorm from "./ModalListCustorm";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const colors = {
  1: "red",
  2: "orange",
  3: "yellow",
  4: "green",
  5: "blue",
  6: "purple",
};

const style = (borderColor) => {
  return {
    padding: "8px 0",
    background: "rgb(255, 255, 255)",
    boxShadow: "rgba(21, 67, 152, 0.1) 0px 0px 30px",
    borderRadius: "10px",
    width: "100%",
    height: "150px",
    borderTop: `6px solid ${borderColor}`,
  };
};

//data y/c số khach hang
const data1 = [];
for (let i = 0; i < 4; i++) {
  data1.push({
    key: i,
    stt: i,
    codeRequest: `0000${i}`,
    personRequest: `Person ${i}`,
    address: `09123xxx ${i}`,
    reason: `Adress ${i}`,
  });
}

//data y/c ho tro
const columns2 = [
  {
    title: "STT",
    dataIndex: "stt",
  },
  {
    title: "Tiêu đề",
    dataIndex: "codeRequest",
  },
  {
    title: "Người yêu cầu",
    dataIndex: "personRequest",
  },
  {
    title: "Email / Số điện thoại",
    dataIndex: "address",
  },
  {
    title: "Nội dung",
    dataIndex: "reason",
  },
  {
    title: "Ngày yêu cầu",
    dataIndex: "date",
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
  },
];

const Genaral = () => {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalColumns, setModalColumns] = useState([]);
  const [modalDataSource, setModalDataSource] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [data2, setData2] = useState(null);
  const [dataOverView, setdataOverView] = useState("");

  const [dateStringStart, setDateStringStart] = useState("");
  const [dateStringEnd, setDateStringEnd] = useState("");

  const dispatch = useDispatch();

  const overView = useSelector(
    (state) => state?.overView?.overViewGet?.overViewGet?.Object
  );

  // console.log(overView);

  const dataArrayViewDetail = useSelector(
    (state) => state?.overView?.overViewDetail?.overviewDetails?.Object
  );

  const overViewDetail = dataArrayViewDetail ? Object.values(dataArrayViewDetail)[0] : null;

  const columns1 = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Mã khách hàng",
      dataIndex: "UserCode",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "FullName",
    },
    {
      title: "Email / Số điện thoại",
      dataIndex: "PhoneNumber",
    },
    {
      title: "Địa chỉ dùng nước",
      dataIndex: "Address",
    },
  ];

  //get dd/mm/yy hien tại và truosc đó 1 tháng
  const today = moment().toISOString();
  const lastMonth = moment().subtract(1, "month").toISOString();

  //request body _ bandau
  const [fromDate, setFromDate] = useState(lastMonth);
  const [toDate, setToDate] = useState(today);


  //get View
  const getView = () => {
    dispatch(
      fetchOverView({
        "FromDate": fromDate,
        "ToDate": toDate
      })
    );
  };

  // useEffect(() => {
  //   getView();
  // }, []);

  //save and convert toISOS
  const handleOnchange = (dates) => {
    if (dates && dates.length === 2) {
      const startDateString = dates[0]?.toISOString();
      const endDateString = dates[1]?.toISOString();
      setFromDate(startDateString);
      setToDate(endDateString);
    } else {
      setFromDate("");
      setToDate("");
    }
  };

  const getViewDetail = () => {
    dispatch(
      fetchDetailsOverView({
        TextSearch: "",
        PageSize: 20,
        CurrentPage: 1,
        Type: selectedItemId,
        FromDate: fromDate,
        ToDate: toDate
      })
    );
  };

  //get Detail
  useEffect(() => {
    getViewDetail();
  }, [selectedItemId]);

  //gui resquest body api
  useEffect(() => {
    getView();
  }, [fromDate, toDate]);

  const showModal1 = (title) => {
    setModalTitle(title);
    setModalVisible1(true);
  };

  const showModal2 = (title, columns, dataSource) => {
    setModalTitle(title);
    setModalColumns(columns);
    setModalDataSource(dataSource);
    setModalVisible2(true);
  };

  //khi overViewDetail thay đổi cập nhạt setModalDataSource tránh lỗi lần đầu ko có giá trị
  useEffect(() => {
    setModalDataSource(overViewDetail);
  }, [overViewDetail]);

  const handleOk = () => {
    setModalVisible1(false);
    setModalVisible2(false);
  };

  const handleCancel = () => {
    setModalVisible1(false);
    setModalVisible2(false);
  };

  
  const handleColClick = (itemId) => {
    setSelectedItemId(itemId.toString());
    if (itemId === "1") {
      // showModal1("Danh sách hóa đơn chưa thanh toán");
    } else if (itemId === "3") {
      showModal2("Danh sách khách hàng", columns1, overViewDetail);
    } else if (itemId === "5") {
      // showModal2("Yêu cầu hỗ trợ", columns1, overViewDetail);
    }
  };

  //XỬ LÝ SEARCH
  const handleSearch = (value) => {
    dispatch(
      fetchDetailsOverView({
        TextSearch: value,
        PageSize: 20,
        CurrentPage: 1,
        Type: selectedItemId,
        FromDate: fromDate,
        ToDate: toDate
      })
    );
  };

  return (
    <Wapper>
      <div style={{ display: "flex", fontWeight: 500, fontSize: "16px" }}>
        <span style={{ marginRight: "10px" }}>Khung thời gian: </span>
        <RangePicker
          defaultValue={[dayjs(fromDate, dateFormat), dayjs(toDate, dateFormat)]}
          format={dateFormat}
          onChange={handleOnchange}
          bordered
        />
      </div>

      <Divider />

      <Card
        title="Thông báo"
        bordered={false}
        style={{
          width: "100%",
          justifyContent: "left",
        }}
      >
        <>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            {overView &&
              overView?.map((item) => {
                const styleColor = colors[item.Type];
                return (
                  <Col
                    className="gutter-row"
                    span={8}
                    onClick={() => handleColClick(item.Type)}
                    key={item.Type}
                    style={{ marginBottom: "20px" }}
                  >
                    <div key={item.Type} style={style(styleColor)}>
                      <Row>
                        <Col span={16} style={{ marginTop: "14px" }}>
                          <Row>
                            <div style={{ display: "flex" }}>
                              <Dots
                                style={{ marginLeft: "20px", marginTop: "8px" }}
                              />
                              <span
                                style={{
                                  marginLeft: "10px",
                                  fontWeight: 600,
                                  fontSize: "14px",
                                }}
                              >
                                {item.Name}
                              </span>
                            </div>
                          </Row>
                          <Row>
                            <span
                              style={{
                                margin: "20px 50px",
                                fontWeight: 600,
                                fontSize: "30px",
                                color: "#154398",
                              }}
                            >
                              {item.CountNumber}
                            </span>
                          </Row>
                        </Col>
                        <Col
                          span={8}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img src={img1} />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </>
      </Card>

      <Modals
        title={modalTitle}
        visible={modalVisible1}
        onOk={handleOk}
        onCancel={handleCancel}
      />

      <ModalListCustorm
        title={modalTitle}
        visible={modalVisible2}
        onOk={handleOk}
        onCancel={handleCancel}
        columns={modalColumns}
        dataSource={modalDataSource}
        onSearch={handleSearch}
      />
    </Wapper>
  );
};

export default Genaral;
