import React from "react";
import { Image, Row, Col, Space } from "antd";
import bg1 from "../../common/images/imageHome_page/counter-box-bg1.png";
import bg2 from "../../common/images/imageHome_page/counter-box-bg2.png";
import bg3 from "../../common/images/imageHome_page/counter-box-bg2 (1).png";

const Number = () => {
  return (
    <div className="px-72">
      <div className="title text-[24px] font-bold py-[20px] border-b-[1px] text-[#154398] border-[#ebebeb] relative mb-[30px]">
        Con số tiêu biểu
      </div>
      <Row gutter={[18, 30]}>
        <Col span={8}>
          <Image preview={false} src={bg1} width="100%" />
        </Col>
        <Col span={8}>
          <Image preview={false} src={bg2} width="100%" />
        </Col>
        <Col span={8}>
          <Image preview={false} src={bg3} width="100%" />
        </Col>
      </Row>
    </div>
  );
};

export default Number;
