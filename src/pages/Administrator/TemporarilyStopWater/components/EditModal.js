import {
  Button,
  Col,
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
import { CloudUploadOutlined, InboxOutlined } from "@ant-design/icons";
import { StopWaterModalStyle } from "./styles";
const { Dragger } = Upload;

const EditModal = ({ open, onCancel, data, isEdit }) => {
  const [loading, setLoading] = useState();
  const [isModalOpen, setIsModalOpen] = useState(open);
  const [type, setType] = useState(1);
  const [form] = Form.useForm();

  const title = !!isEdit
    ? "Cập nhật đối tượng sử dụng/mức sử dụng"
    : "Thêm đối tượng sử dụng/mức sử dụng";

  const treeData = [];
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
              ...values,
              WaterPriceID: data?.WaterPriceID,
              WaterPriceType: type,
            })
          : InsertTemporarilyStopWater({
              ...values,
              WaterPriceType: type,
            });
      })
      .finally(() => {
        setLoading(false);
        onCancel();
      });
  };

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

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
            <Col>
              <Form.Item
                label="Giá bán theo"
                defaultValue={open?.WaterPriceType || type}
                rules={[
                  {
                    required: true,
                    message: "Thông tin không được để trống",
                  },
                ]}
              >
                <Select
                  name="WaterPriceType"
                  defaultValue={open?.WaterPriceType || type}
                  onChange={(value) => {
                    setType(value);
                  }}
                  options={[
                    {
                      value: 1,
                      label:
                        "Giá bán nước sạch cho đối tượng là hộ gia đình sử dụng vào mục đích sinh hoạt",
                    },
                    {
                      value: 2,
                      label:
                        "Giá bán nước sạch cho đối tượng là các cơ quan hành chính,đơn vị sự nghiệp,doanh nghiệp,tổ chức,cá nhân hoạt động sản xuất kinh doanh,dịch vụ trên dịa bàn thành phố Hà Nội",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Chọn thời gian"
                defaultValue={open?.WaterPriceType || type}
                rules={[
                  {
                    required: true,
                    message: "Thông tin không được để trống",
                  },
                ]}
              >
                <TimePicker.RangePicker />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="WaterPriceTitle"
            defaultValue={open?.WaterPriceTitle}
            label={
              type == 1
                ? "MỨC SỬ DỤNG NƯỚC SINH HOẠT CỦA HỘ DÂN CƯ (M3/THÁNG/HỘ)"
                : "Tên mục đích sử dụng"
            }
            rules={[
              {
                required: true,
                message: "Thông tin không được để trống",
              },
            ]}
          >
            <Input
              placeholder={
                type == 1
                  ? "nhập MỨC SỬ DỤNG NƯỚC SINH HOẠT CỦA HỘ DÂN CƯ"
                  : "nhập tên mục đích sử dụng"
              }
              defaultValue={open?.WaterPriceTitle}
            />
          </Form.Item>

          <Form.Item
            name="WaterPrice"
            label="Đơn giá"
            rules={[
              {
                required: true,
                message: "Thông tin không được để trống",
              },
            ]}
          >
            <Dragger {...props}>
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
