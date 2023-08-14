import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { FileImageOutlined, UploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Wrapper } from "./style";
import {
  fetGetListWaterConfig,
  fetchContractInstallForIndividual,
  fetchLapDatTuNhan,
} from "../../../reducers/guestServicesSlice";
import {
  fetchGetRegion,
  fetchGetRegionAll,
  fetchGetRegionByRegionID,
  fetchgetList,
} from "../../../reducers/managementTeamSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const { TextArea } = Input;

const optionsPorpuse = [];

const Private = () => {
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
  const [valueFile, setValueFile] = useState("");

  const listWaterConfig = useSelector(
    (state) => state?.guestSerives?.listWaterConfig?.listWaterConfig?.Object
  );

  const optionsPorpuse = [];
  if (listWaterConfig) {
    listWaterConfig?.map((item) => {
      optionsPorpuse.push({
        value: item.WaterPriceID,
        label: item.WaterPriceTitle,
      });
    });
  }

  const handleChange = (value) => {
    setValuePurpose(value);
  };

  useEffect(() => {
    dispatch(fetGetListWaterConfig(1));
  }, []);

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

  // const propsIDCard = {
  //   beforeUpload: (file) => {
  //     const isPNG = file.type === "image/png";
  //     if (!isPNG) {
  //       message.error(`${file.name} is not a png file`);
  //     }
  //     return isPNG || Upload.LIST_IGNORE;
  //   },
  //   onChange: (info) => {
  //     const fileID = info ? Object?.values(info?.fileList[0]) : null;
  //     setValueFileIDCard(fileID);
  //   },
  // };

  const propsUsingLand = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      const fileLand = info ? Object?.values(info?.fileList[0]) : null;
      setValueFileQSD(fileLand);
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
      const file = info ? Object?.values(info?.fileList[0]) : null;
      setValueFile(file);
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

  const onFinish = (values) => {
    dispatch(
      fetchLapDatTuNhan({
        CustomerName: nameClient,
        RequestType: 1,
        PhoneNumber: values.PhoneNumber,
        Email: values.Email,
        ProvinceID: values.ProvinceID,
        DistrictID: values.DistrictID,
        WardID: values.WardID,
        AddressUseWater: values.AddressUseWater,
        PurposeUseType: values.PurposeUseType,
        Content: values.Content,
        file_CCCD: fileIDCard,
        file_QSD: fileUsing,
        file: "",
      })
    );
  };

  // const onFinish = (values) => {
  //   console.log("values>>", values);
  // };

  const handleOnclickBtn = () => {
    if (nameClient == null) {
      navigave("/dang-nhap");
    }
  };

  const fileIDCard = valueFileIDCard ? Object.values(valueFileIDCard)[0] : null;
  const fileUsing = valueFileIDCard ? Object.values(valueFileQSD)[0] : null;

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
            <Form.Item label="Tên khách hàng" name="CustomerName">
              <Input
                defaultValue={nameClient ? nameClient : null}
                onChange={handleName}
                placeholder="Nhập tên"
                disabled
                style={{ backgroundColor: "#ffe7ba" }}
              ></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Điện thoại liên hệ"
              name="PhoneNumber"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input onChange={handlePhone} placeholder="Nhập số"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Email liên hệ"
              name="Email"
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
        <h2>Địa chỉ lắp đặt:</h2>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Tỉnh"
              name="ProvinceID"
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
              name="DistrictID"
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
              name="WardID"
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
              name="AddressUseWater"
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
              name="PurposeUseType"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                defaultValue="--Chọn--"
                style={{
                  width: "100%",
                }}
                onChange={handleChange}
                options={optionsPorpuse}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Nôi dung:" name="Content">
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
            name="file_CCCD"
            valuePropName="fileList"
            getValueFromEvent={(event) => {
              return event?.fileList;
            }}
            rules={[
              {
                required: true,
              },
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
              // {...propsIDCard}
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
                setValueFileIDCard([info.file]);
              }}
              showUploadList={false}
              defaultValue={fileIDCard || null}
            >
              <Button icon={<FileImageOutlined />}>Chọn ảnh</Button>
            </Upload>
            {fileIDCard?.name}
          </Form.Item>
        </Row>

        <Row>
          <Form.Item
            label="Giấy chứng nhận Quyền sở hữu/sử dụng nhà đất"
            name="file_QSD"
            valuePropName="fileListUsing"
            getValueFromEvent={(event) => {
              return event?.fileList;
            }}
            rules={[
              {
                required: true,
              },
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
              // {...propsUsingLand}
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
                setValueFileQSD([info.file]);
              }}
              showUploadList={false}
              defaultValue={fileUsing || null}
            >
              <Button icon={<FileImageOutlined />}>Chọn ảnh</Button>
            </Upload>
            {fileUsing?.name}
          </Form.Item>
        </Row>

        <Row>
          <Form.Item
            label="Giấy tờ khác (nếu có)"
            name="file"
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
        <span style={{ color: "rgb(0, 123, 255)", fontWeight: 600 }}>
          Khi bấm Gửi thông tin Tôi cam kết các thông tin kê khai là đầy đủ,
          chính xác và đồng ý với Quy định cung cấp dịch vụ nước của Cấp nước
          Hải Phòng.
        </span>

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

export default Private;
