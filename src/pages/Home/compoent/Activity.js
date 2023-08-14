import React from "react";
import { Col, Row } from "antd";
import { Typography } from "antd";
import moment from "moment";

const { Title } = Typography;

const Activity = (props) => {
  const { selectedTabKey, dataPost } = props;
  const dataListTwo = dataPost ? Object.values(dataPost)[1] : null;

  const formattedDate = moment(dataListTwo?.PublicationTime).format(
    "DD/MM/YYYY"
  );
  return (
    <>
      {dataListTwo ? (
        <Row
          key={dataListTwo.PostID}
          gutter={16}
          style={{ width: "100%", marginBottom: "20px" }}
        >
          <Col span={8}>
            {dataListTwo?.Image && (
              <img src={dataListTwo?.Image} alt={dataListTwo?.Title} />
            )}
          </Col>
          <Col span={16}>
            <Row>
              <Title
                level={3}
                style={{ color: "rgb(21, 67, 152)", fontWeight: 600 }}
              >
                {dataListTwo?.Title}
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
              {dataListTwo?.Summary}
            </Row>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default Activity;
