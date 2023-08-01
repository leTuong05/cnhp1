import React, { useEffect, useState } from "react";
import { Wapper } from "./style";
import { Col, Divider, Row, Tabs } from "antd";
import { Typography } from "antd";
import HomeNews from "./compoent/HomeNews";
import Activity from "./compoent/Activity";
import { getPostHome } from "../../services/apis/guestHome";
import moment from "moment";

const { Title } = Typography;

const PostsHome = () => {
  const [selectedTabKey, setSelectedTabKey] = useState("");

  const onChange = (key) => {
    setSelectedTabKey(key);
  };
  const [dataPost, setDataPost] = useState("");
  const [dataPostRight, setDataPostRight] = useState("");

  useEffect(() => {
    const getListPost = async () => {
      const res = await getPostHome();
      setDataPost(res.Object.ListPostHomeLeft);
    };
    getListPost();
  }, []);

  useEffect(() => {
    const getListPost = async () => {
      const res = await getPostHome();
      setDataPostRight(res.Object.ListPostHomeRight);
    };
    getListPost();
  }, []);

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
          <HomeNews selectedTabKey={selectedTabKey} dataPost={dataPost} />
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
          <Activity selectedTabKey={selectedTabKey} dataPost={dataPost} />
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
          {dataPostRight
            ? dataPostRight?.map((item) => {
                const formattedDate = moment(item.PublicationTime).format(
                  "DD/MM/YYYY"
                );
                return (
                  <div key={item?.PostID}>
                    <h1
                      style={{
                        fontSize: "16px",
                        color: "red",
                        fontWeight: 600,
                      }}
                    >
                      {item?.CategoryPostName}
                    </h1>
                    <Title level={4} style={{ color: "rgb(21, 67, 152)" }}>
                      {item.Title}
                    </Title>
                    <h5 style={{ textAlign: "left" }}>
                      {formattedDate}
                    </h5>
                    <Divider />
                  </div>
                );
              })
            : null}
        </Col>
      </Row>
    </Wapper>
  );
};

export default PostsHome;
