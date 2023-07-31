import React from "react";
import { Card, Tabs } from "antd";
import TabsLeft from "./featureService/TabsLeft";
import TabsRight from "./featureService/TabsRight";
import { WapperInstall } from "./styles";

const Installation = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: (
        <div style={{ fontSize: "20px", fontWeight: 600 }}>Yêu cầu lắp đặt</div>
      ),
      children: (
        <>
          <TabsLeft />
        </>
      ),
    },
    {
      key: "2",
      label: (
        <div style={{ fontSize: "20px", fontWeight: 600 }}>
          Yêu cầu di chuyển
        </div>
      ),
      children: (
        <>
          <TabsRight />
        </>
      ),
    },
  ];
  return (
    <WapperInstall>
      <Card
        title="Lắp đặt/ di chuyển máy nước"
        bordered={false}
        style={{
          width: "100%",
        }}
      >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Card>
    </WapperInstall>
  );
};

export default Installation;
