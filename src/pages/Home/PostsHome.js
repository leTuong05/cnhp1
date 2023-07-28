import React, { useState } from "react";
import { Wapper } from "./style";
import { Col, Divider, Row, Tabs } from "antd";
import { Typography } from "antd";
import HomeNews from "./compoent/HomeNews";
import Activity from "./compoent/Activity";

const { Title } = Typography;

const PostsHome = () => {

    const [selectedTabKey, setSelectedTabKey] = useState('');

    const onChange = (key) => {
      setSelectedTabKey(key)
    };
    const items = [
      {
        key: "1",
        label: (
          <>
            <Title level={3} style={{ color: "rgb(21, 67, 152)" }}>
              Tin tức / Sự kiện
            </Title>
          </>
        ),
        children: (
          <>
            <HomeNews selectedTabKey={selectedTabKey} />
          </>
        ),
      },
      {
        key: "2",
        label: (
          <>
            <Title level={3} style={{ color: "rgb(21, 67, 152)" }}>
              Hoạt động công ty
            </Title>
          </>
        ),
        children: (
          <>
            <Activity selectedTabKey={selectedTabKey} />
          </>
        ),
      },
    ];
  return (
    <Wapper>
      <Row gutter={16} style={{ width: "100%" }}>
        <Col className="gutter-row" span={16}>
          <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </Col>

        <Col className="gutter-row" span={8}>
          <div>
            <h1 style={{ fontSize: "16px", color: "red", fontWeight: 600 }}>
              Hoạt động sản xuất kinh doanh
            </h1>
            <Title level={4} style={{ color: "rgb(21, 67, 152)" }}>
              Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của
              thành phố
            </Title>
            <h5 style={{ textAlign: "left" }}>2022-11-23 19:50:36</h5>
            <Divider />
          </div>
          <div>
            <h1 style={{ fontSize: "16px", color: "red", fontWeight: 600 }}>
              Hoạt động sản xuất kinh doanh
            </h1>
            <Title level={4} style={{ color: "rgb(21, 67, 152)" }}>
              Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của
              thành phố
            </Title>
            <h5 style={{ textAlign: "left" }}>2022-11-23 19:50:36</h5>
            <Divider />
          </div>

          <div>
            <h1 style={{ fontSize: "16px", color: "red", fontWeight: 600 }}>
              Hoạt động sản xuất kinh doanh
            </h1>
            <Title level={4} style={{ color: "rgb(21, 67, 152)" }}>
              Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của
              thành phố
            </Title>
            <h5 style={{ textAlign: "left" }}>2022-11-23 19:50:36</h5>
            <Divider />
          </div>
        </Col>
      </Row>
    </Wapper>
  );
};

export default PostsHome;
