import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  Input,
  Modal,
  Row,
  Select,
  message,
} from "antd";
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

const ModalAddUnits = (props) => {
  const dispatch = useDispatch();
  const { title, onOk, handlehideModal, isModalVisiable, selectedRow, mode } =
    props;
  const { SHOW_PARENT } = TreeSelect;

  const [form] = Form.useForm();
  const nameValue = Form.useWatch("name", form);

  const [valueTinh, setValueTinh] = useState("");
  const [valueHuyen, setValueHuyen] = useState("");
  const [valueXa, setValueXa] = useState("");

  const [nameManagement, setNameManagement] = useState("");
  const [codeManagement, setCodeManagement] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [employee, setEmployee] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [repasword, setRepasword] = useState("");
  const [area, setArea] = useState("");

  const [valueSelected, setValueSelected] = useState("");
  const [initialNameManagement, setInitialNameManagement] = useState("");

  // const [codeManagement, setCodeManagement] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [address, setAddress] = useState('');
  // const [employee, setEmployee] = useState('');
  // const [area, setArea] = useState('');
  // const [account, setAccount] = useState('');
  // const [password, setPassword] = useState('');
  // const [repasword, setRepasword] = useState('');

  // console.log(valueSelected);

  useEffect(() => {
    setValueSelected(selectedRow);
  }, [selectedRow]);

  const onSearch = (value) => {
    // console.log("search:", value);
  };

  const onChange = (value) => {
    setValueTinh(value);
  };

  const onChangeLevelOne = (value) => {
    setValueHuyen(value);
  };

  const onSearchLeveTwo = (value) => {
    setValueXa(value);
  };

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

  // console.log('valueSelected:', valueSelected
  // );

  // console.log(
  //   'ManagementTeamID:' , valueSelected.ManagementTeamID,
  // );
  // console.log(
  //   'ManagementTeamName:' , valueSelected.ManagementTeamName,
  // );
  // console.log(
  //   'ManagementTeamCode:' , valueSelected.ManagementTeamCode,
  // );
  // console.log(
  //   'PhoneNumber:' , valueSelected.PhoneNumber,
  // );
  // console.log(
  //   'Address:' , valueSelected.Address,
  // );
  // console.log(
  //   'UserID:' , valueSelected.employee,
  // );
  // console.log(
  //   'Password:' , valueSelected.Password,
  // );
  // console.log(
  //   'RePassword:' , valueSelected.RePassword,
  // );
  // console.log(
  //   'RegionID:' , valueSelected.area,
  // );

  //add To Quan Ly
  // useEffect(() => {
  //     createManagement();
  //     getList();
  // }, [])

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
  // console.log("listRegionHP>>>>>",listRegionHP);

  // console.log(listStaff);

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
          value: item.UserID,
          label: item.FullName,
        });
      });
  }

  // console.log("valueSelected", valueSelected);

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

  // SET EDIT
  //name moi Edit
  const handleChangeNameEdit = (e) => {
    setInitialNameManagement(e.target.value);
    setValueSelected({
      ...valueSelected,
      ManagementTeamName: e.target.value,
    });
  };

  //ma to chuc
  const handleCodeManagementEdit = (e) => {
    // setInitialNameManagement(e.target.value);
    setValueSelected({
      ...valueSelected,
      ManagementTeamCode: e.target.value,
    });
  };

  //sdt
  const handlePhonetEdit = (e) => {
    setInitialNameManagement(e.target.value);
    setValueSelected({
      ...valueSelected,
      PhoneNumber: e.target.value,
    });
  };

  //diachi
  const handleAdrressEdit = (e) => {
    // setInitialNameManagement(e.target.value);
    setValueSelected({
      ...valueSelected,
      Address: e.target.value,
    });
  };
  //nhanvien trong cong ty
  // const handleEnolyeeNameEdit = (e) => {
  //     setInitialNameManagement(e.target.value);
  //     setValueSelected({
  //         ...valueSelected,
  //         ManagementTeamName: e.target.value
  //     })
  // }

  //kkhu  vuc quan ly

  const getList = () => {
    dispatch(
      fetchgetList({
        PageSize: 20,
        CurrentPage: 1,
      })
    );
  };

  const createManagement = (callback) => {
    dispatch(
      fetchCreateManageTeam({
        ManagementTeamName: nameManagement,
        ManagementTeamCode: codeManagement,
        PhoneNumber: phoneNumber,
        Address: address,
        Staff: [
          {
            UserID: employee,
          },
        ],
        UserName: account,
        Password: password,
        RePassword: repasword,
        RegionID: area,
      })
    ).then(() => {
      callback();
    });
  };

  //   useEffect(() => {
  //     getList();
  //   }, []);

  const handleChangeName = (e) => {
    setNameManagement(e.target.value);
  };

  const handleDeparment = (e) => {
    setCodeManagement(e.target.value);
  };

  const handlePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleEmployee = (value) => {
    // console.log('value',value.toString());
    setEmployee(value.toString());
  };

  // const handleArea = (e) => {
  //     setArea(e.target.value)
  // }

  const handleAccount = (e) => {
    setAccount(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleResspassword = (e) => {
    setRepasword(e.target.value);
  };

  console.log(valueTinh, valueHuyen, valueXa);

  // const [value, setValue] = useState(['0-0-0']);

  const handleTreeArea = (value) => {
    // console.log(value.toString());
    setArea(value.toString());
  };

  const tProps = {
    treeData,
    // onChangeTree,
    treeCheckable: true,
    // showCheckedStrategy: SHOW_PARENT,
    placeholder: "Chọn nội dung",
    style: {
      width: "100%",
    },
  };

  console.log("selectedRow: ", selectedRow);

  const updateManagement = (callback) => {
    dispatch(
      fetchUpdateManageTeam({
        ManagementTeamID: selectedRow.ManagementTeamID,
        ManagementTeamName: valueSelected.ManagementTeamName,
        ManagementTeamCode: valueSelected.ManagementTeamCode,
        PhoneNumber: valueSelected.PhoneNumber,
        Address: valueSelected.Address,
        Staff: [
          {
            UserID: employee,
          },
        ],
        UserID: selectedRow.UserID,
        Password: password,
        RePassword: repasword,
        RegionID: area,
      })
    ).then(() => {
      callback();
    });
  };

  console.log(password, repasword);

  const onFinish = () => {
    if (selectedRow) {
      updateManagement(() => {
        handlehideModal();
        getList();
      });
    } else {
      createManagement(() => {
        handlehideModal();
        getList();
      });
    }
  };

  useEffect(() => {
    if (errorMess) {
      notification.error({
        message: "Thông báo !",
        description: errorMess,
      });
    }
  }, [errorMess]);

  // const [managementTeamName, setManagementTeamName] = useState('');

  // useEffect(() => {
  //     if (mode === 'edit') {
  //       setManagementTeamName(selectedRow?.ManagementTeamName || '');
  //     } else {
  //       setManagementTeamName('');
  //     }
  //   }, [mode, selectedRow]);

  return (
    <>
      <WapperModal
        style={{ width: "900px" }}
        title={title}
        visible={isModalVisiable}
        onOk={onOk}
        onCancel={handlehideModal}
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
                key={valueSelected?.ManagementTeamID} // Sử dụng key để re-render component khi valueSelected thay đổi
              >
                <div>
                  <Input
                    defaultValue={
                      mode === "edit" ? valueSelected?.ManagementTeamName : null
                    }
                    onChange={
                      mode === "edit" ? handleChangeNameEdit : handleChangeName
                    }
                    placeholder="Nhập nội dụng"
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                name="codeDepart"
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
                key={valueSelected?.ManagementTeamID}
              >
                <Input
                  defaultValue={valueSelected?.ManagementTeamCode || ""}
                  onChange={
                    mode === "edit" ? handleCodeManagementEdit : handleDeparment
                  }
                  placeholder="Nhập nội dụng"
                />
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
                  },
                ]}
                key={valueSelected?.ManagementTeamID}
              >
                <Input
                  defaultValue={valueSelected?.PhoneNumber || ""}
                  onChange={mode === "edit" ? handlePhonetEdit : handlePhone}
                  placeholder="Nhập nội dụng"
                />
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
                key={valueSelected?.ManagementTeamID}
              >
                <Input
                  defaultValue={valueSelected?.Address || ""}
                  onChange={mode === "edit" ? handleAdrressEdit : handleAddress}
                  placeholder="Chọn nôi dụng"
                />
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
                key={valueSelected?.ManagementTeamID}
              >
                {/* <Input onChange={handleEmployee} /> */}
                <Select
                  mode="tags"
                  showSearch
                  placeholder="Chọn nội dung"
                  optionFilterProp="children"
                  onChange={handleEmployee}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={optionsStaff}
                  defaultValue={valueSelected?.UserNameEmployee || undefined}
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
                // key={valueSelected?.ManagementTeamID}
              >
                <Input
                  //   defaultValue={mode === "edit" ? "Không được nhập" : ""}
                  placeholder="Chọn nội dung"
                  disabled={mode == "edit"}
                  onChange={handleAccount}
                />
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
                // key={valueSelected?.ManagementTeamID}
              >
                <Input
                  defaultValue={""}
                  onChange={
                    // mode === "edit" ? handlePasswordEdit :
                    handlePassword
                  }
                  placeholder="Chọn nôi dung"
                />
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
                // key={valueSelected?.ManagementTeamID}
              >
                <Input
                  defaultValue={""}
                  onChange={
                    // mode === "edit" ? handleRePasswordEdit :
                    handleResspassword
                  }
                  placeholder="Chọn nội dung"
                />
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
                key={valueSelected?.ManagementTeamID}
              >
                {/* <Input onChange={handleArea} /> */}
                <TreeSelect
                  {...tProps}
                  onChange={handleTreeArea}
                  defaultValue={valueSelected?.RegionName || undefined}
                />
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
