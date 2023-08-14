import { CloudUploadOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Upload,
} from "antd";
import { useEffect, useState } from "react";
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
  const fromDate = moment(data?.FromDate);
  const toDate = moment(data?.toDate);
  const [fileList, setFileList] = useState([]);
  const file = fileList ? Object.values(fileList)[0] : null;
  console.log("fileList>>>>", file);

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
  useEffect(() => {
    console.log(data);
    form.setFieldsValue({
      DistrictID: "",
      ProvinceID: "",
      WardID: "",
      company: data?.WaterCompany,
      file: "",
      // time: [fromDate, toDate],
    });
  }, []);

  return (
    <StopWaterModalStyle>
      <Modal
        title={title}
        open={isModalOpen}
        onCancel={onCancel}
        footer={footer}
        width={1000}
      >
        <Button
          onClick={() => {
            console.log(form.validateFields());
            console.log(data);
          }}
        >
          test
        </Button>
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
                <DatePicker.RangePicker
                  showTime={{ format: "HH:mm" }}
                  format="YYYY-MM-DD HH:mm"
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

          <Form.Item
            valuePropName="fileList"
            getValueFromEvent={(event) => {
              return event?.fileList;
            }}
            rules={[
              {
                validator(_, fileList) {
                  return new Promise((resolve, reject) => {
                    if (fileList && fileList[0].size > 90000000) {
                      reject("File size exceeded");
                    } else {
                      resolve("Success");
                    }
                  });
                },
              },
            ]}
          >
            <Upload
              maxCount={1}
              beforeUpload={(file) => {
                return new Promise((resolve, reject) => {
                  if (file.size > 9000000) {
                    reject("File size exceeded");
                    // message.error("File size exceeded");
                  } else {
                    resolve("Success");
                  }
                });
              }}
              customRequest={(info) => {
                setFileList([info.file]);
              }}
              showUploadList={false}
              defaultValue={file || null}
            >
              <Row />
              <Button icon={<UploadOutlined />}>Thêm ảnh</Button>
            </Upload>
            {fileList[0]?.name}
          </Form.Item>
        </Form>
      </Modal>
    </StopWaterModalStyle>
  );
};
export default EditModal;
