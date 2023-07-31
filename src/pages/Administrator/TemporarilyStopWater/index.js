import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, DatePicker, Form, Row, Select, Tooltip } from "antd";
import { useEffect, useState } from "react";
import CustomTable from "../../../components/Table";
import TitleComponent from "../../../components/TitleComponent";
import { getTemporarilyStopWater } from "../../../services/apis/TemporarilyStopWater";
import {
  getRegion,
  getRegionAll,
  getRegionByRegionID,
} from "../../../services/apis/managementTeam";
import { TemporarilyStopWaterStyle, WrapperButton } from "./styles";
const { RangePicker } = DatePicker;

const TemporarilyStopWater = () => {
  const [form] = Form.useForm();
  const [buttonShow, SetButtonShow] = useState(null);
  const [data, setData] = useState();
  const [listProvince, setListProvince] = useState();
  const [listDistrict, setListDistrict] = useState();
  const [listCommune, setListCommune] = useState();
  const [loading, setLoading] = useState();
  const [textSeach, setTextSeach] = useState({
    ProvinceID: 0,
    DistrictID: 0,
    WardID: 0,
    Status: 0,
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

  const getData = () => {
    setLoading(true);
    getTemporarilyStopWater(textSeach)
      .then((res) => {
        if (res?.isError) return;
        setData(res?.Object);
      })
      .finally(() => setLoading(false));
  };

  const seach = () => {
    setLoading(true);
    form
      .validateFields()
      .then((res) => {
        setTextSeach(res);
      })
      .finally(() => setLoading(false));
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
      title: "THỜI GIAN",
      dataIndex: "WaterPriceTitle",
      key: "WaterPriceTitle",
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
                  <Button shape="circle" onClick={() => {}}>
                    <FontAwesomeIcon icon={faPen} />
                  </Button>
                </Tooltip>
                <Tooltip title="xóa" className="ml">
                  <Button shape="circle" onClick={() => {}}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </Tooltip>
              </div>
            </div>
          ) : (
            () => {
              text === 1 ? (
                <span className="calendar-status-text">Mới tạo</span>
              ) : text === 2 ? (
                <span className="calendar-status-text">Chờ duyệt</span>
              ) : text === 3 ? (
                <span className="calendar-status-text">Đã duyệt</span>
              ) : (
                <span className="calendar-status-text">Đã hủy</span>
              );
            }
          )}
        </div>
      ),
    },
  ];

  useEffect(() => {
    getProvince();
  }, []);

  useEffect(() => {
    getData();
  }, [textSeach]);

  return (
    <TemporarilyStopWaterStyle>
      <Form form={form} layout="horizontal">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item label="Giá bán theo">
              <RangePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item name="Status" defaultValue={0}>
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
            <Form.Item name="Province" defaultValue={0}>
              <Select
                defaultValue={0}
                style={{ width: "100%" }}
                onChange={(value) => {
                  !!value ? getDistrict(value) : setListDistrict([]);
                  console.log(value);
                  console.log(listDistrict);
                  form.setFieldValue("District", 0);
                  form.setFieldValue("Commune", 0);
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
            <Form.Item name="District" defaultValue={0}>
              <Select
                defaultValue={0}
                style={{ width: "100%" }}
                onChange={(value) => {
                  !!value ? getCommune(value) : setListCommune([]);
                  form.setFieldValue("Commune", 0);
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
            <Form.Item name="Commune" defaultValue={0}>
              <Select
                defaultValue={0}
                style={{ width: "100%" }}
                onChange={(value) => {
                  console.log(value);
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
              seach();
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
    </TemporarilyStopWaterStyle>
  );
};
export default TemporarilyStopWater;
