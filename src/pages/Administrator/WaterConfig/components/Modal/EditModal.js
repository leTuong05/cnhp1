import { Button, Form, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import {
  InsertWaterConfig,
  UpdateWaterConfig,
} from "../../../../../services/apis/WaterConfig";

const EditModal = ({ open, onCancel, isEdit, data, getList }) => {
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
        isEdit ? handleEdit() : handleSubmit();
      }}
    >
      {!!isEdit ? "Cập nhật" : "thêm"}
    </Button>,
  ];

  const handleEdit = () => {
    setLoading(true);
    form
      .validateFields()
      .then((values) => {
        UpdateWaterConfig({
          ...values,
          WaterPriceID: open?.WaterPriceID,
        }).then(() => {
          getList();
          onCancel();
        });
      })
      .catch((errors) => {
        console.log(errors);
        return;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    setLoading(true);
    form
      .validateFields()
      .then((values) => {
        if (form?.errors) return;
        InsertWaterConfig({
          ...values,
        }).then(() => {
          getList();
          onCancel();
        });
      })
      .catch((errors) => {
        console.log(errors);
        return;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    isEdit
      ? form.setFieldsValue({
          ...data,
        })
      : form.setFieldsValue({
          WaterPriceType: 1,
        });
  }, [data]);

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
            name="WaterPriceType"
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
