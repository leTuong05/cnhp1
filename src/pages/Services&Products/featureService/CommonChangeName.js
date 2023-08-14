import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { FileImageOutlined, UploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Wrapper } from "./style";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetRegion,
  fetchGetRegionAll,
  fetchGetRegionByRegionID,
  fetchgetList,
} from "../../../reducers/managementTeamSlice";

const { TextArea } = Input;

const CommonChangeName = () => {
  const dispatch = useDispatch();
  const navigave = useNavigate();

  const nameClient = useSelector((state) => state?.auth?.user?.FullName);
  // console.log(nameClient);
  const [form] = Form.useForm();

  const [valueName, setValueName] = useState("");
  const [valueCode, setValueCode] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueAdress, setValueAdress] = useState("");
  const [valuePurpose, setValuePurpose] = useState("");
  const [valueContent, setValueContent] = useState("");
  const [valueFileIDCard, setValueFileIDCard] = useState("");
  const [valueFileQSD, setValueFileQSD] = useState("");
  const [valueFileSigin, setValueFileSigin] = useState("");

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

  const propsUsingSigin = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      // console.log(info.fileList);
      setValueFileSigin(info.fileList);
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

  const codeThue = (e) => {
    setValueCode(e.target.value);
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

  const onFinish = () => {};
  return (
    <Wrapper>
      <Form
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Row gutter={16}>
          <Col span={14}>
            <Form.Item
              label="Tên cơ quan (hộ KD hoặc SX)"
              name="tencoquan"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              {/* <Select></Select> */}
              <Input onChange={handleName} placeholder="Nhập tên"></Input>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Mã số thuế (không có nhập 0)">
              {/* <Select></Select> */}
              <Input onChange={codeThue} placeholder="Nhập mã"></Input>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Mã khách hàng"
              name="tenkKH"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                defaultValue={nameClient}
                disabled
                placeholder="Nhập tên"
              ></Input>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label="Tên chủ hợp đồng cũ"
              name="nameOld"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Nhập tên"></Input>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label="Tên chủ hợp đồng mới"
              name="nameNew"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Nhập tên"></Input>
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
        <h2>Địa chỉ lắp đặt</h2>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label=" Tỉnh"
              name="diachi"
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
              label="Quận/Huyện"
              name="quan"
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
              label="Xã/Phường"
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
              label="Số nhà:"
              name="sonha"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input onChange={handleAddress} placeholder="Số nhà" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Mục đích sử dụng:">
              <Input onChange={handlePurpose} placeholder="Mục đích" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Nôi dung:"
              name="noidung"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea onChange={handleContent} placeholder="Nội dung" />
            </Form.Item>
          </Col>
        </Row>

        <h1>2.Hồ sơ cần cung cấp</h1>
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
            label="Giấy đăng ký kinh doanh (Pháp nhân/Cá nhân kinh doanh)"
            name="sohudat"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload {...propsUsingSigin}>
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
                required: true,
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
            <Button className="btnSubmit">Gửi thông tin</Button>
          </Form.Item>
        </Row>
      </Form>
    </Wrapper>
  );
};

export default CommonChangeName;
