import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import TitleComponent from "../../../../../components/TitleComponent";
import { ModalStyled } from "./styles";
import { useForm } from "antd/es/form/Form";
import moment from "moment";
import "moment/locale/vi";
import {
  InserAgent,
  InsertGuest,
  UpdateGuest,
} from "../../../../../services/apis/user";

const { TextArea } = Input;
const ModalInsertGuest = ({
  isModalOpen,
  onCancel,
  onInsertGuest,
  recordSelected,
}) => {
  const [form] = useForm();
  console.log(recordSelected);

  const handleInputChange = (event) => {
    // const { name, value } = event.target;
    // setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     [name]: value,
    // }));
  };
  const handleFormSubmit = async () => {
    form
      .validateFields()
      .then((values) => {
        if (values.IdentificationDateRange) {
          values.IdentificationDateRange = moment
            .utc(values.IdentificationDateRange)
            .format();
        }

        console.log(values);

        const insert = async () => {
          await InsertGuest({
            AccountType: values.AccountType,
            Address: values.Address,
            Email: values.Email,
            FullName: values.FullName,
            Identification: values.Identification,
            IdentificationDateRange: values.IdentificationDateRange,
            IdentificationIssuedBy: values.IdentificationIssuedBy,
            Password: values.Password,
            PhoneNumber: values.PhoneNumber,
            RePassword: values.RePassword,
            UserCode: values.UserCode,
            UserName: values.UserName,
          });
          onInsertGuest(true);
          onCancel();
        };

        insert();
      })
      .catch((error) => {
        console.log("Form không hợp lệ");
      });
  };

  const handleFormUpdate = () => {
    form
      .validateFields()
      .then((values) => {
        if (values.IdentificationDateRange) {
          values.IdentificationDateRange = moment
            .utc(values.IdentificationDateRange)
            .format();
        }

        console.log(values);

        const update = async () => {
          await UpdateGuest({
            UserID: recordSelected.UserID,

            FullName: values.FullName,
            PhoneNumber: values.PhoneNumber,
            Email: values.Email,
            Address: values.Address,
            Identification: values.Identification,
            IdentificationDateRange: values.IdentificationDateRange,
            IdentificationIssuedBy: values.IdentificationIssuedBy,
          });
          onInsertGuest(true);
          onCancel();
        };

        update();
      })
      .catch((error) => {
        console.log("Form không hợp lệ");
      });
  };
  const handleModalClose = () => {
    form.resetFields();
    onCancel();
    console.log(1);
  };

  useEffect(() => {
    if (isModalOpen) {
      form.resetFields();
    }
  }, [isModalOpen]);

  const renderFooterButtons = () => {
    if (recordSelected) {
      return [
        <Button onClick={onCancel} key="closeButton">
          Đóng
        </Button>,
        <Button
          key="updateButton"
          type="primary"
          htmlType="submit"
          form="modalForm"
          onClick={handleFormUpdate}
        >
          Cập nhật
        </Button>,
      ];
    } else {
      return [
        <Button onClick={onCancel} key="closeButton">
          Đóng
        </Button>,
        <Button
          key="submitButton"
          type="primary"
          htmlType="submit"
          form="modalForm"
          onClick={handleFormSubmit}
        >
          Ghi lại
        </Button>,
      ];
    }
  };

  const initialValues = {
    // Các giá trị mặc định của form
    FullName: recordSelected?.FullName,
    Email: recordSelected?.Email,
    PhoneNumber: recordSelected?.PhoneNumber,
    AccountType: recordSelected?.GuestType,
    Address: recordSelected?.Address,
    //...
  };
  return (
    <ModalStyled
      width={1000}
      title={<TitleComponent title={"Thêm khách hàng mới"} />}
      open={isModalOpen}
      onCancel={handleModalClose}
      okText={"Ghi lại"}
      cancelText={"Đóng"}
      footer={renderFooterButtons()}
    >
      <Form
        id="modalForm"
        initialValues={initialValues}
        form={form}
        layout="vertical"
      >
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <Form.Item
              name="UserCode"
              label="Mã khách hàng"
              rules={[
                {
                  required: true,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <Input onChange={handleInputChange} placeholder="Mã khách hàng" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="FullName"
              label="Tên khách hàng"
              rules={[
                {
                  required: true,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <Input
                onChange={handleInputChange}
                placeholder="Tên khách hàng"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="Email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <Input onChange={handleInputChange} placeholder="Email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="PhoneNumber"
              label="Số điện thoại"
              rules={[
                {
                  required: true,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <Input onChange={handleInputChange} placeholder="Số điện thoại" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="Identification"
              label="CMND/CCCD/Hộ chiếu"
              rules={[
                {
                  required: true,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <Input
                onChange={handleInputChange}
                placeholder="CMND/CCCD/Hộ chiếu"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="IdentificationDateRange"
              label="Ngày cấp"
              rules={[
                {
                  required: true,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <DatePicker
                onChange={handleInputChange}
                placeholder="Ngày cấp"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="IdentificationIssuedBy"
              label="Nơi cấp"
              rules={[
                {
                  required: true,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <Input onChange={handleInputChange} placeholder="Nơi cấp" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="AccountType"
              label="Loại khách hàng"
              rules={[
                {
                  required: true,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <Select
                placeholder={"Loại khách hàng"}
                style={{
                  width: "100%",
                }}
                onChange={handleInputChange}
                options={[
                  {
                    value: 0,
                    label: "Tư nhân",
                  },
                  {
                    value: 1,
                    label: "Cơ quan",
                  },
                  {
                    value: 2,
                    label: "Đại lý cấp 1",
                  },
                  {
                    value: 3,
                    label: "Đại lý cấp 2",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="ProvinceID"
              label="Tỉnh/Thành phố"
              rules={[
                {
                  required: false,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <Select
                placeholder={"Tỉnh/Thành phố"}
                style={{
                  width: "100%",
                }}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Quận/Huyện"
              name="DistrictID"
              rules={[
                {
                  required: false,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <Select
                placeholder={"Quận/Huyện"}
                style={{
                  width: "100%",
                }}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="WardID"
              label="Xã/Phường"
              rules={[
                {
                  required: false,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <Select
                placeholder={"Xã/Phường"}
                style={{
                  width: "100%",
                }}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="Address"
              label="Địa chỉ dùng nước"
              rules={[
                {
                  required: true,
                  message: "Thông tin không được để trống",
                },
              ]}
            >
              <TextArea placeholder="Địa chỉ dùng nước" rows={4} />
            </Form.Item>
          </Col>
          {!recordSelected && (
            <Col span={12}>
              <Row gutter={[20, 20]}>
                <Col span={24}>
                  <Form.Item
                    name="UserName"
                    label="Tài khoản"
                    rules={[
                      {
                        required: true,
                        message: "Thông tin không được để trống",
                      },
                    ]}
                  >
                    <Input
                      onChange={handleInputChange}
                      placeholder="Tài khoản"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="Password"
                    label="Mật khẩu"
                    rules={[
                      {
                        required: true,
                        message: "Thông tin không được để trống",
                      },
                    ]}
                  >
                    <Input.Password
                      onChange={handleInputChange}
                      placeholder="Mật khẩu"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="RePassword"
                    label="Nhập lại mật khẩu"
                    rules={[
                      {
                        required: true,
                        message: "Thông tin không được để trống",
                      },
                    ]}
                  >
                    <Input.Password
                      onChange={handleInputChange}
                      placeholder="Nhập lại mật khẩu"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </Form>
    </ModalStyled>
  );
};

export default ModalInsertGuest;
