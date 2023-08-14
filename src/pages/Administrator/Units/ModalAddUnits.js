import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, Modal, Row, Select, message } from "antd";
import { WapperModal } from "../../../components/Style/style";
import { useDispatch, useSelector } from "react-redux";
import {
  fetGetListRegionHP,
  fetGetListStaff,
  fetchCreateManageTeam,
  fetchDeteleManageTeam,
  fetchGetRegion,
  fetchGetRegionAll,
  fetchGetRegionByRegionID,
  fetchUpdateManageTeam,
  fetchgetList,
  fetchgetListAll,
} from "../../../reducers/managementTeamSlice";
import { TreeSelect } from "antd";
import { notification } from "antd";

const { SHOW_PARENT } = TreeSelect;

const ModalAddUnits = (props) => {
  const { title, onOk, handlehideModal, isModalVisiable, selectedRow, mode } =
    props;

  const [form] = Form.useForm();

  const [valueTinh, setValueTinh] = useState("");
  const [valueHuyen, setValueHuyen] = useState("");
  const [valueXa, setValueXa] = useState("");

  const dispatch = useDispatch();

  const getRegionAll = () => {
    dispatch(fetchGetRegionAll());
  };
  //region ALL
  useEffect(() => {
    getRegionAll();
  }, []);

  //region Huyen/Quan
  const getRegion = () => {
    dispatch(fetchGetRegion(valueTinh));
  };

  useEffect(() => {
    getRegion();
  }, [valueTinh]);

  //region xa/phuong
  const regionByID = () => {
    dispatch(fetchGetRegionByRegionID(valueHuyen));
  };
  useEffect(() => {
    regionByID();
  }, [valueHuyen]);

  const getListStaff = () => {
    dispatch(fetGetListStaff());
  };

  useEffect(() => {
    getListStaff();
  }, []);

  const getRegionHP = () => {
    dispatch(fetGetListRegionHP());
  };

  useEffect(() => {
    getRegionHP();
  }, []);

  const listRegionAll = useSelector(
    (state) => state?.manage?.regionAll?.regionAll?.Object
  );
  const listRegion = useSelector(
    (state) => state?.manage?.region?.region?.Object
  );
  const listRegionByID = useSelector(
    (state) => state?.manage?.regionByRegionID?.regionByRegionID?.Object
  );
  const listStaff = useSelector(
    (state) => state?.manage?.listStaff?.staffAll?.Object
  );

  const listRegionHP = useSelector(
    (state) => state?.manage?.regionListHP?.regionHP?.Object
  );

  const errorMess = useSelector(
    (state) => state?.updateManageTeam?.error?.Object
  );

  const treeData = [];
  listRegionHP &&
    listRegionHP?.forEach((item) => {
      treeData?.push({
        title: item.RegionName,
        value: item.RegionID,
        children: [],
      });
      if (item.RegionLevel === 3) {
        item.list.forEach((child) => {
          treeData[treeData.length - 1].children.push({
            title: child.RegionName,
            value: child.RegionID,
          });
        });
      }
    });

  const optionsStaff = [];
  {
    listStaff &&
      listStaff?.forEach((item) => {
        optionsStaff.push({
          value: item?.UserID,
          label: item?.FullName,
        });
      });
  }

  const options = [];
  {
    listRegionAll &&
      listRegionAll?.forEach((item) => {
        options.push({
          value: item.RegionID,
          label: item.RegionName,
        });
      });
  }

  const optionsLevelOne = [];
  {
    listRegion &&
      listRegion?.forEach((item) => {
        optionsLevelOne.push({
          value: item.RegionID,
          label: item.RegionName,
        });
      });
  }

  const optionsLevelTwo = [];
  {
    listRegionByID &&
      listRegionByID?.forEach((item) => {
        optionsLevelTwo.push({
          value: item.RegionID,
          label: item.RegionName,
        });
      });
  }

  const getList = () => {
    dispatch(
      fetchgetList({
        PageSize: 20,
        CurrentPage: 1,
      })
    );
  };

  const createManagement = (values, callback) => {
    const { name, code, phone, address, employee, account, pass, repass, kv } =
      values;
    dispatch(
      fetchCreateManageTeam({
        ManagementTeamName: name,
        ManagementTeamCode: code,
        PhoneNumber: phone,
        Address: address,
        Staff: employee,
        UserName: account,
        Password: pass,
        RePassword: repass,
        RegionID: kv.toString(),
      })
    ).then(() => {
      callback();
    });
  };

  const tProps = {
    treeData,
    treeCheckable: true,
    placeholder: "Chọn nội dung",
    showCheckedStrategy: SHOW_PARENT,
    style: {
      width: "100%",
    },
  };

  const updateManagement = (values, callback) => {
    const { name, code, phone, address, employee, pass, repass, kv } = values;
    dispatch(
      fetchUpdateManageTeam({
        ManagementTeamID: selectedRow.ManagementTeamID,
        ManagementTeamName: name,
        ManagementTeamCode: code,
        PhoneNumber: phone,
        Address: address,
        Staff: employee,
        UserID: selectedRow.UserID,
        Password: pass,
        RePassword: repass,
        RegionID: kv,
      })
    ).then(() => {
      callback();
    });
  };

  const onFinish = (values) => {
    try {
      if (selectedRow) {
        updateManagement(values, () => {
          handlehideModal();
          getList();
        });
      } else {
        createManagement(values, () => {
          handlehideModal();
          getList();
        });
      }
    } catch (error) {}
  };

  const handleCancel = () => {
    form.resetFields();
    handlehideModal();
  };

  useEffect(() => {
    if (errorMess) {
      notification.error({
        message: "Thông báo !",
        description: errorMess,
      });
    }
  }, [errorMess]);

  useEffect(() => {
    if (mode === "edit") {
      const employeeID = selectedRow?.Staff[0]?.UserID;
      console.log(employeeID);
      form.setFieldsValue({
        name: selectedRow?.ManagementTeamName,
        code: selectedRow?.ManagementTeamCode,
        phone: selectedRow?.PhoneNumber,
        address: selectedRow?.Address,
        employee: selectedRow?.Staff,
        account: selectedRow?.UserName,
        pass: "",
        repass: "",
        kv: selectedRow?.WardID.split(",").map(Number),
      });
    } else {
      form.resetFields();
    }
  }, [isModalVisiable]);

  return (
    <>
      <WapperModal
        style={{ width: "900px" }}
        title={title}
        visible={isModalVisiable}
        onOk={onOk}
        onCancel={handleCancel}
      >
        <Form
          autoComplete="off"
          form={form}
          onFinish={onFinish}
          layout="vertical"
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Tên tổ quản lý"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên tổ quản lý",
                  },
                ]}
              >
                <Input
                  placeholder="Nhập nội dụng"
                  style={{ width: "100%", display: "block" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                name="code"
                label="Mã tổ chức"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mã tổ chức",
                  },
                  {
                    max: 30,
                    message: "Mã tổ chức không được quá 30 ký tự!",
                  },
                ]}
              >
                <Input placeholder="Nhập nội dụng" />
              </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col span={11}>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại",
                  },
                  {
                    pattern: /^[0-9]+$/,
                    message: "Vui lòng chỉ nhập số",
                  },
                ]}
              >
                <Input placeholder="Nhập nội dụng" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item
                name="address"
                label="Địa chỉ"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Chọn nôi dụng" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item
                name="employee"
                label="Nhân viên trong công ty"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  mode="tags"
                  showSearch
                  placeholder="Chọn nội dung"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={optionsStaff}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={7}>
              <Form.Item
                name="account"
                label="Tài khoản"
                rules={[
                  {
                    required: mode === "edit" ? false : true,
                    message: "Vui lòng nhập tên tài khoản",
                  },
                  {
                    min: 6,
                    message: "Tên tài khoản phải có ít nhất 6 ký tự!",
                  },
                  {
                    max: 255,
                    message: "Tên tài khoản không được vượt quá 255 ký tự!",
                  },
                ]}
              >
                <Input placeholder="Chọn nội dung" disabled={mode == "edit"} />
              </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col span={7}>
              <Form.Item
                name="pass"
                label="Mật khẩu"
                rules={[
                  {
                    required: true,
                  },
                  {
                    min: 8,
                    message: "Mật khẩu phải tối thiểu tám ký tự!",
                  },
                  {
                    pattern: /(?=.*[A-Z])/,
                    message: "Mật khẩu phải chứa ít nhất một chữ cái viết hoa!",
                  },
                  {
                    pattern: /(?=.*[a-z])/,
                    message:
                      "Mật khẩu phải chứa ít nhất một chữ cái viết thường!",
                  },
                  {
                    pattern: /(?=.*\d)/,
                    message: "Mật khẩu phải chứa ít nhất một số!",
                  },
                  {
                    pattern: /(?=.*[!@#$%^&*])/,
                    message: "Mật khẩu phải chứa ít nhất một ký tự đặc biệt!",
                  },
                ]}
              >
                <Input placeholder="Chọn nôi dung" />
              </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col span={7}>
              <Form.Item
                name="repass"
                label="Mật khẩu xác nhận"
                rules={[
                  {
                    required: true,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("pass") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Mật khẩu nhập lại không khớp!")
                      );
                    },
                  }),
                ]}
              >
                <Input placeholder="Chọn nội dung" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item
                name="kv"
                label="Khu vực quản lý"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TreeSelect {...tProps} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{
                    float: "right",
                    display: "block",
                    background: "var(--btn-primary-color)",
                    width: "108px",
                  }}
                >
                  Ghi lại
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </WapperModal>
    </>
  );
};

export default ModalAddUnits;

// <Row>
// <Col span={7}>
//     <Form.Item name="tinh" label="Tỉnh/Thành phố"
//         rules={[
//             {
//             required: true,
//             },
//         ]}
//     >
//     <Select
//         showSearch
//         placeholder="Chọn nội dung"
//         optionFilterProp="children"
//         onChange={onChange}
//         onSearch={onSearch}
//         filterOption={(input, option) =>
//         (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//         }
//         options={options}
//     />
//     </Form.Item>
// </Col>
// <Col span={1}></Col>
// <Col span={7}>
//     <Form.Item name="thanh pho" label="Quận/Huyện"
//         rules={[
//             {
//             required: true,
//             },
//         ]}
//         >
//         <Select
//             showSearch
//             placeholder="Chọn nội dung"
//             optionFilterProp="children"
//             onChange={onChangeLevelOne}
//             onSearch={onSearch}
//             filterOption={(input, option) =>
//             (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//             }
//             options={optionsLevelOne}
//         />
//     </Form.Item>
// </Col>
// <Col span={1}></Col>
// <Col span={7}>
//     <Form.Item name="quanhuyen" label="Xã/Phường"
//         rules={[
//             {
//             required: true,
//             },
//         ]}
//         >
//         <Select
//             showSearch
//             placeholder="Chọn nội dung"
//             optionFilterProp="children"
//             onChange={onSearchLeveTwo}
//             onSearch={onSearch}
//             filterOption={(input, option) =>
//             (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//             }
//             options={optionsLevelTwo}
//         />
//     </Form.Item>
// </Col>
// </Row>
