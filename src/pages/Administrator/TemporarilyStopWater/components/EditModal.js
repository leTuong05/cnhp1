import { CloudUploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  TimePicker,
  Upload,
  message,
} from "antd";
import { useState } from "react";
import {
  InsertTemporarilyStopWater,
  UpdateTemporarilyStopWater,
} from "../../../../services/apis/TemporarilyStopWater";
import {
  getRegion,
  getRegionByRegionID,
} from "../../../../services/apis/managementTeam";
import { StopWaterModalStyle } from "./styles";
import moment from "moment";
const { Dragger } = Upload;
const { RangePicker } = DatePicker;
const EditModal = ({ open, onCancel, data, isEdit, listProvince }) => {
  const [listDistrict, setListDistrict] = useState();
  const [listCommune, setListCommune] = useState();
  const [loading, setLoading] = useState();
  const [isModalOpen, setIsModalOpen] = useState(open);
  const [type, setType] = useState(1);
  const [form] = Form.useForm();
  const currentTime = new Date();

  const title = !!isEdit
    ? "Cập nhật lịch tạm ngừng cấp nước"
    : "Thêm lịch tạm ngừng cấp nước";

  //   get District by Province id

  const getDistrict = (id) => {
    setLoading(true);
    getRegion(id)
      .then((res) => {
        if (res?.isError) return;
        setListDistrict(res?.Object);
      })
      .finally(() => setLoading(false));
  };

  //   get Commune by District id

  const getCommune = (id) => {
    setLoading(true);
    getRegionByRegionID(id)
      .then((res) => {
        if (res?.isError) return;
        setListCommune(res?.Object);
      })
      .finally(() => setLoading(false));
  };

  const footer = [
    <Button
      onClick={() => {
        handleSubmit();
      }}
    >
      {!!isEdit ? "Cập nhật" : "thêm"}
    </Button>,
    <Button
      onClick={() => {
        onCancel();
      }}
    >
      Đóng
    </Button>,
  ];

  const handleSubmit = () => {
    setLoading(true);
    form
      .validateFields()
      .then((values) => {
        !!isEdit
          ? UpdateTemporarilyStopWater({
              TemporarilyStopWaterID: data?.TemporarilyStopWaterID,
              WaterCompany: values?.WaterCompany,
              ProvinceID: values?.ProvinceID,
              DistrictID: values?.DistrictID,
              WardID: values?.WardID,
              FromDate: values?.time[0],
              ToDate: values?.time[1],
              File: values?.file,
            })
          : InsertTemporarilyStopWater({
              WaterCompany: values?.WaterCompany,
              ProvinceID: values?.ProvinceID,
              DistrictID: values?.DistrictID,
              WardID: values?.WardID,
              CreateDate: moment(currentTime).format("yyyy-MM-dd HH:mm:ss"),
              FromDate: values?.time[0],
              ToDate: values?.time[1],
              File: values?.file,
            });
      })
      .finally(() => {
        setLoading(false);
        onCancel();
      });
  };

  const props = {
    onChange: (info) => {
      console.log(info.fileList);
    },
  };
  form.setFieldsValue({
    ...data,
  });

  return (
    <StopWaterModalStyle>
      <Modal
        title={title}
        open={isModalOpen}
        onCancel={onCancel}
        footer={footer}
        width={1000}
      >
        <Form form={form} layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={16}>
              <Form.Item
                label="Tên công ty"
                name="company"
                rules={[
                  {
                    required: true,
                    message: "Thông tin không được để trống",
                  },
                ]}
              >
                <Input
                  placeholder={`Nhập tên công ty`}
                  defaultValue={data?.WaterCompany}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Chọn thời gian"
                name="time"
                rules={[
                  {
                    required: true,
                    message: "Thông tin không được để trống",
                  },
                ]}
              >
                <RangePicker
                  showTime={{ format: "HH:mm" }}
                  format="YYYY-MM-DD HH:mm"
                  defaultValue={[data?.FromDate, data?.ToDate]}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            {/* tỉnh */}
            <Col span={8}>
              <Form.Item
                name="ProvinceID"
                defaultValue={0}
                label="Chọn tỉnh/thành phố"
              >
                <Select
                  defaultValue={0}
                  style={{ width: "100%" }}
                  onChange={(value) => {
                    !!value ? getDistrict(value) : setListDistrict([]);
                    form.setFieldValue("DistrictID", 0);
                    form.setFieldValue("WardID", 0);
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
            <Col span={8}>
              <Form.Item
                name="DistrictID"
                defaultValue={0}
                label="Chọn quận/huyện"
              >
                <Select
                  defaultValue={0}
                  style={{ width: "100%" }}
                  onChange={(value) => {
                    !!value ? getCommune(value) : setListCommune([]);
                    form.setFieldValue("WardID", 0);
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
            <Col span={8}>
              <Form.Item name="WardID" defaultValue={0} label="Chọn xã/phường">
                <Select
                  defaultValue={0}
                  style={{ width: "100%" }}
                  onChange={(value) => {}}
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

          <Form.Item name="file" label="file đính kèm">
            <Dragger {...props} multiple={false}>
              <div className="upload-div">
                <p className="ant-upload-drag-icon">
                  <CloudUploadOutlined />
                </p>
                <p className="ant-upload-text">
                  Kéo thả file đính kèm hoặc chọn file
                </p>
              </div>
            </Dragger>
          </Form.Item>
        </Form>
      </Modal>
    </StopWaterModalStyle>
  );
};
export default EditModal;
