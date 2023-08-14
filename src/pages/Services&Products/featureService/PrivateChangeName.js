import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { FileImageOutlined, UploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Wrapper } from "./style";
import { fetchContractInstallForIndividual } from "../../../reducers/guestServicesSlice";
import {
  fetchGetRegion,
  fetchGetRegionAll,
  fetchGetRegionByRegionID,
  fetchgetList,
} from "../../../reducers/managementTeamSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const { TextArea } = Input;

const PrivateChangeName = () => {
  const dispatch = useDispatch();
  const navigave = useNavigate();

  const nameClient = useSelector((state) => state?.auth?.user?.FullName);
  // console.log(nameClient);
  const [form] = Form.useForm();

  const [valueName, setValueName] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueAdress, setValueAdress] = useState("");
  const [valuePurpose, setValuePurpose] = useState("");
  const [valueContent, setValueContent] = useState("");
  const [valueFileIDCard, setValueFileIDCard] = useState("");
  const [valueFileQSD, setValueFileQSD] = useState("");

  // ================ CALL select tinh/huyen xa
  const [valueTinh, setValueTinh] = useState("");
  const [valueHuyen, setValueHuyen] = useState("");
  const [valueXa, setValueXa] = useState("");

  const listRegionAll = useSelector(
    (state) => state?.manage?.regionAll?.regionAll?.Object
  );

  const listRegion = useSelector(
    (state) => state?.manage?.region?.region?.Object
  );
  const listRegionByID = useSelector(
    (state) => state?.manage?.regionByRegionID?.regionByRegionID?.Object
  );

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

  const onChange = (value) => {
    setValueTinh(value);
    dispatch(
      fetchgetList({
        PageSize: 20,
        CurrentPage: 1,
        ProvinceID: value,
      })
    );
  };

  const onChangeLevelOne = (value) => {
    setValueHuyen(value);
    dispatch(
      fetchgetList({
        PageSize: 20,
        CurrentPage: 1,
        DistrictID: value,
      })
    );
  };

  const onSearchLeveTwo = (value) => {
    setValueXa(value);
    dispatch(
      fetchgetList({
        PageSize: 20,
        CurrentPage: 1,
        WardID: value,
      })
    );
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

  // END Call select tinh/huyen/xa =====================

  const propsIDCard = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      // console.log(info.fileList);
      setValueFileIDCard(info.fileList);
    },
  };

  const propsUsingLand = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      // console.log(info.fileList);
      setValueFileQSD(info.fileList);
    },
  };

  const propsOrther = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      // console.log(info.fileList);
    },
  };

  const handleName = (e) => {
    setValueName(e.target.value);
  };
  const handlePhone = (e) => {
    setValuePhone(e.target.value);
  };
  const handleEmail = (e) => {
    setValueEmail(e.target.value);
  };
  const handleAddress = (e) => {
    setValueAdress(e.target.value);
  };
  const handlePurpose = (e) => {
    setValuePurpose(e.target.value);
  };
  const handleContent = (e) => {
    setValueContent(e.target.value);
  };
  const handleOnclickBtn = () => {
    if (nameClient == null) {
      navigave("/dang-nhap");
    }
  };

  const onFinish = (values) => {
    console.log("values>>>", values);
  };
  return (
    <Wrapper>
      <Form
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Mã khách hàng" name="tenKH">
              <Input
                defaultValue={nameClient ? nameClient : null}
                onChange={handleName}
                placeholder="Nhập tên"
                disabled
              ></Input>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              label="Tên chủ hợp đồng cũ"
              name="tenOld"
            >
              <Input onChange={handleName} placeholder="Nhập tên"></Input>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              label="Tên chủ hợp đồng mới"
              name="tenNew"
            >
              <Input onChange={handleName} placeholder="Nhập tên"></Input>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Điện thoại liên hệ"
              name="dienthoai"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input onChange={handlePhone} placeholder="Nhập số"></Input>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email liên hệ"
              name="email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input onChange={handleEmail} placeholder="Nhập email"></Input>
            </Form.Item>
          </Col>
        </Row>
        <h2>Địa chỉ sử dụng nước:</h2>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Tỉnh"
              name="Tinh"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Tỉnh/Thành phố"
                optionFilterProp="children"
                onChange={onChange}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={options}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Quận/ Huyện"
              name="huyen"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Quận/huyện"
                optionFilterProp="children"
                onChange={onChangeLevelOne}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={optionsLevelOne}
                style={{ width: "100%" }}
                disabled={valueTinh ? false : true}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Xã/ Phường"
              name="xa"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Xã/Phường"
                optionFilterProp="children"
                onChange={onSearchLeveTwo}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={optionsLevelTwo}
                style={{ width: "100%" }}
                disabled={valueHuyen ? false : true}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Số nhà/tổ/thôn/xóm:"
              name="sonha"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                onChange={handleAddress}
                placeholder="Số nhà/tổ/thôn/xóm"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Mục đích sử dụng:"
              name="mucdich"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input onChange={handlePurpose} placeholder="Mục đích" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Nôi dung:">
              <TextArea
                onChange={handleContent}
                rows={4}
                placeholder="Nhập nội dung"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>

        <h1>
          <span style={{ color: "orange" }}>2. </span>
          Hồ sơ cần cung cấp
        </h1>
        <Row>
          <h2>
            Tải ảnh lên có dung lượng file tối đa 5MB, định dạng:.JPG, .JPEG,
            .PNG, .SVG
          </h2>
        </Row>
        <Row>
          <Form.Item
            label="Giấy chứng minh thư nhân dân/Căn cước công dân"
            name="cccd"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload {...propsIDCard}>
              <Button icon={<FileImageOutlined />}>Chọn ảnh</Button>
            </Upload>
          </Form.Item>
        </Row>

        <Row>
          <Form.Item
            label="Giấy chứng nhận Quyền sở hữu/sử dụng nhà đất"
            name="sohudat"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload {...propsUsingLand}>
              <Button icon={<FileImageOutlined />}>Chọn ảnh</Button>
            </Upload>
          </Form.Item>
        </Row>

        <Row>
          <Form.Item
            label="Giấy tờ khác (nếu có)"
            name="khac"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Upload {...propsOrther}>
              <Button icon={<FileImageOutlined />}>Chọn ảnh</Button>
            </Upload>
          </Form.Item>
        </Row>

        <Divider />

        <Row>
          <Form.Item>
            <Button
              onClick={handleOnclickBtn}
              htmlType="submit"
              className="btnSubmit"
            >
              Gửi thông tin
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Wrapper>
  );
};

export default PrivateChangeName;
