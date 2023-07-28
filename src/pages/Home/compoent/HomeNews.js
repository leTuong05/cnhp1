import React from "react";
import { Col, Row } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

const HomeNews = (props) => {
    const {selectedTabKey} = props
    console.log(selectedTabKey);
  return (
    <>
      <Row gutter={16} style={{ width: "100%" }}>
        <Col span={8}>
          <img src={null}></img>
        </Col>
        <Col span={16}>
          <Row>
            <Title
              level={3}
              style={{ color: "rgb(21, 67, 152)", fontWeight: 600 }}
            >
              Cấp nước Hải Phòng tham gia Hội nghị kết nối cung – cầu sản phẩm,
              dịch vụ của các doanh nghiệp trong khối năm 2022
            </Title>
          </Row>
          <Title
            level={5}
            style={{
              color: "rgb(131, 131, 131)",
              fontSize: "12px",
            }}
          >
            09:02:46 26/11/2022
          </Title>
          <Row
            style={{
              color: "rgb(131, 131, 131)",
            }}
          >
            Cấp nước Hải Phòng tham gia Hội nghị kết nối cung – cầu sản phẩm,
            dịch vụ của các doanh nghiệp trong khối năm 2022
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default HomeNews;
