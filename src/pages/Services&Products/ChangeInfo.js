import { Card, Radio, Tabs } from "antd";
import React, { useState } from "react";
import { Wrapper } from "./featureService/style";
import PrivateChangeName from "./featureService/PrivateChangeName";
import CommonChangeName from "./featureService/CommonChangeName";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Tư nhân`,
    children: (
      <>
        <PrivateChangeName />
      </>
    ),
  },
  {
    key: "2",
    label: `Cơ quan`,
    children: (
      <>
        <CommonChangeName />
      </>
    ),
  },
];

const ChangeInfo = () => {
  const [value, setValue] = useState(1);
  const onChangeCheck = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Wrapper>
      <Card title="Đăng ký thay đổi thông tin">
        <h1>
          <span style={{ color: "orange" }}>1. </span>
          Thông tin khách hàng
        </h1>
        <div style={{ width: "100%" }}>
          <h2>Khách hàng yêu cầu</h2>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </Card>
    </Wrapper>
  );
};

export default ChangeInfo;
