import React, { useState } from "react";
import { Wrapper } from "./style";
import PrivateMove from "./PrivateMove";
import CommonMove from "./CommonMove";
import { Radio, Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Tư nhân`,
    children: (
      <>
        <PrivateMove />
      </>
    ),
  },
  {
    key: "2",
    label: `Cơ quan`,
    children: (
      <>
        <CommonMove />
      </>
    ),
  },
];

const TabsRight = () => {
  const [value, setValue] = useState(1);
  const onChangeCheck = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Wrapper>
      <h1>
        <span style={{ color: "orange" }}>1. </span>
        Thông tin khách hàng
      </h1>
      <div style={{ display: "flex", position: "relative" }}>
        <div style={{ width: "100%" }}>
          <h2>Khách hàng yêu cầu</h2>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        <div style={{ position: "absolute", right: "80px" }}>
          <h2>Hình thức yêu cầu</h2>
          <Radio.Group onChange={onChangeCheck} value={value}>
            <Radio value={1}>Nhanh</Radio>
            <Radio value={2}>Chậm</Radio>
          </Radio.Group>
        </div>
      </div>
    </Wrapper>
  );
};

export default TabsRight;
