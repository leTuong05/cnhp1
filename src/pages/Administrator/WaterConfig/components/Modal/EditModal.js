import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";
import {
  InsertWaterConfig,
  UpdateWaterConfig,
} from "../../../../../services/apis/WaterConfig";

const EditModal = ({ open, onCancel, isEdit }) => {
  const [loading, setLoading] = useState();
  const [isModalOpen, setIsModalOpen] = useState(open);
  const [type, setType] = useState(1);
  const [form] = Form.useForm();

  const title = !!isEdit
    ? "Cập nhật đối tượng sử dụng/mức sử dụng"
    : "Thêm đối tượng sử dụng/mức sử dụng";

  const footer = [
    <Button
      onClick={() => {
        handleSubmit();
      }}
    >
      {!!isEdit ? "Cập nhật" : "thêm"}
    </Button>,
  ];

  const handleSubmit = () => {
    setLoading(true);
    form
      .validateFields()
      .then((values) => {
        !!isEdit
          ? UpdateWaterConfig({
              ...values,
              WaterPriceID: open?.WaterPriceID,
              WaterPriceType: type,
            })
          : InsertWaterConfig({
              ...values,
              WaterPriceType: type,
            });
      })
      .finally(() => {
        setLoading(false);
        onCancel();
      });
  };

  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onCancel={onCancel}
        footer={footer}
        width={1000}
      >
        <Form form={form} layout="vertical">
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
                  ? "nhập MỨC SỬ DỤNG NƯỚC SINH HOẠT CỦA HỘ DÂN CƯ "
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
            <Input
              placeholder={`Nhập giá tiền`}
              defaultValue={open?.WaterPrice}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default EditModal;
