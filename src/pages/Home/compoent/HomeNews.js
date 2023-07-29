import React from "react";
import { Col, Row } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

const HomeNews = (props) => {
  const { selectedTabKey, dataPost } = props;
  console.log("dataPost:>>", dataPost);
  return (
    <>
      {dataPost &&
        dataPost.map((item) => {
          return (
            <Row gutter={16} style={{ width: "100%", marginBottom: '20px' }}>
              <Col span={8}>
                <img src={null}>{item.Image}</img>
              </Col>
              <Col span={16}>
                <Row>
                  <Title
                    level={3}
                    style={{ color: "rgb(21, 67, 152)", fontWeight: 600 }}
                  >
                    {item.Title}
                  </Title>
                </Row>
                <Title
                  level={5}
                  style={{
                    color: "rgb(131, 131, 131)",
                    fontSize: "12px",
                  }}
                >
                  {item.PublicationTime}
                </Title>
                <Row
                  style={{
                    color: "rgb(131, 131, 131)",
                  }}
                >
                  {item.Summary}
                </Row>
              </Col>
            </Row>
          );
        })}
    </>
  );
};

export default HomeNews;
