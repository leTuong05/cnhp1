import React from "react";
import { Col, Row } from "antd";
import { Typography } from "antd";
import moment from "moment";

const { Title } = Typography;

const HomeNews = (props) => {
  const { selectedTabKey, dataPost } = props;

  const dataListOne = dataPost ? Object.values(dataPost)[0] : null;

  const formattedDate = moment(dataListOne?.PublicationTime).format(
    "DD/MM/YYYY"
  );

  return (
    <>
      {dataListOne ? (
        <Row
          key={dataListOne.PostID}
          gutter={16}
          style={{ width: "100%", marginBottom: "20px" }}
        >
          <Col span={8}>
            {dataListOne?.Image && (
              <img src={dataListOne?.Image} alt={dataListOne?.Title} />
            )}
          </Col>
          <Col span={16}>
            <Row>
              <Title
                level={3}
                style={{ color: "rgb(21, 67, 152)", fontWeight: 600 }}
              >
                {dataListOne?.Title}
              </Title>
            </Row>
            <Title
              level={5}
              style={{
                color: "rgb(131, 131, 131)",
                fontSize: "12px",
              }}
            >
              {formattedDate}
            </Title>
            <Row
              style={{
                color: "rgb(131, 131, 131)",
              }}
            >
              {dataListOne?.Summary}
            </Row>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default HomeNews;
