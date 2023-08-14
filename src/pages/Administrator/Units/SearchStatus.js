import React, { useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Input, Row, Select, Space } from "antd";
import {
  fetchGetRegion,
  fetchGetRegionAll,
  fetchGetRegionByRegionID,
  fetchgetList,
} from "../../../reducers/managementTeamSlice";
import { useDispatch, useSelector } from "react-redux";

const { Search } = Input;

const optionsStatus = [
  {
    value: "",
    label: <a>Tất cả</a>,
  },
  {
    value: "1",
    label: <a>Đang hoạt động</a>,
  },
  {
    value: "2",
    label: <a>Không hoạt động</a>,
  },
];

const SearchStatus = (props) => {
  const { onSearch, onChangeStatus } = props;
  const [form] = Form.useForm();
  const dispatch = useDispatch();

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
    form.setFieldValue("DistrictID", "Quận/huyện");
    form.setFieldValue("WardID", "Xã/Phường");
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
    form.setFieldValue("WardID", "Xã/Phường");
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

  return (
    <>
      <Form form={form} layout="horizontal">
        <Row gutter={16}>
          <Col span={8}>
            <Space direction="vertical">
              <Search
                placeholder="Nhập mã, tên, SĐT khách hàng"
                onSearch={onSearch}
                style={{
                  width: "50vh",
                }}
              />
            </Space>
          </Col>
          <Col span={4}>
            <Form.Item>
              <Select
                defaultValue=""
                style={{
                  width: "100%",
                }}
                onChange={onChangeStatus}
                options={optionsStatus}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="ProvinceID" defaultValue={0}>
              <Select
                showSearch
                placeholder="Tỉnh/Thành phố"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
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
          <Col span={4}>
            <Form.Item name="DistrictID">
              <Select
                showSearch
                placeholder="Quận/huyện"
                optionFilterProp="children"
                onChange={onChangeLevelOne}
                onSearch={onSearch}
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

          <Col span={4}>
            <Form.Item name="WardID">
              <Select
                showSearch
                placeholder="Xã/Phường"
                optionFilterProp="children"
                onChange={onSearchLeveTwo}
                onSearch={onSearch}
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
      </Form>
    </>
  );
};

export default SearchStatus;
