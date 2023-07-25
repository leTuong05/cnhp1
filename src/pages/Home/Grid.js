import React from 'react'
import { Image, Row, Col } from "antd";
import cskh from '../../common/images/imageHome_page/cskh_8088 1.png'
import cnhp from '../../common/images/imageHome_page/Group 10.png'
import app from "../../common/images/imageHome_page/sms 1.png";
import phone from "../../common/images/imageHome_page/Group 16.png";
import sms from "../../common/images/imageHome_page/Group 17.png";
import phongGiaoDich from "../../common/images/imageHome_page/Group 11.png";
import dichVuCong from "../../common/images/imageHome_page/Group 15.png";
import mail from "../../common/images/imageHome_page/Group 13.png";
import chatbot from "../../common/images/imageHome_page/chatbot (1) 1.png";
import zalo from "../../common/images/imageHome_page/Group 12.png";

const Grid = () => {
    return (
        <div className="px-72 py-16">
          <Row gutter={[18, 30]}>
            <Col span={8}>
              <Image preview={false} src={cskh} width="100%" />
            </Col>
            <Col span={8}>
              <Row gutter={[0, 30]}>
                <Image preview={false} src={cnhp} width="100%" />
                <Image preview={false} src={phone} width="100%" />
              </Row>
            </Col>
            <Col span={8}>
              <Row gutter={[0, 30]}>
                <Image preview={false} src={sms} width="100%" />
                <Image preview={false} src={app} width="100%" />
              </Row>
            </Col>
            <Col span={8}>
              <Row gutter={[0, 30]}>
                <Image preview={false} src={phongGiaoDich} width="100%" />
                <Image preview={false} src={dichVuCong} width="100%" />
              </Row>
            </Col>
            <Col span={8}>
              <Row gutter={[0, 30]}>
                <Image preview={false} src={mail} width="100%" />
                <Image preview={false} src={chatbot} width="100%" />
              </Row>
            </Col>
            <Col span={8}>
              <Image preview={false} src={zalo} width="100%" />
            </Col>
          </Row>
        </div>
      );
}

export default Grid