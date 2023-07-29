import { Card, Image, Typography } from "antd";
import React from "react";
import Service from "../Home/Service";
import { Col, Divider, Row } from "antd";

import { useNavigate } from "react-router-dom";

import hoaDonDienTu from "../../common/images/imageHome_page/hoa-don-dien-tu.png";
import traCuu from "../../common/images/imageHome_page/tra-cuu-su-dung-nuoc.png";
import { Wrapper } from "./style/ServicesStyle";

import dangkithaydoithongtin from "../../common/images/imageHome_page/dangkithaydoithongtin.png";
import lapdatmoi from "../../common/images/imageHome_page/lapdatmoi.png";
import suachua from "../../common/images/imageHome_page/suachua.png";
import lapdatdichuyenmay from "../../common/images/imageHome_page/lapdatdichuyenmay.png";
import sangtenhopdong from "../../common/images/imageHome_page/sangten.png";
import caplaihopdong from "../../common/images/imageHome_page/caplaihopdong.png";
import thanhtoantructuyen from "../../common/images/imageHome_page/thanhtoantructuyen.png";

const style = {
  background: "#fff",
  padding: "8px 0",
  boxShadow: "rgba(21, 67, 152, 0.1) 0px 0px 30px",
};

const styleCart = {
  height: "100%",
  width: "100%",
  cursor: "pointer",
  border: "none",
};

const Services = (props) => {
  // const { style } = props
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Card
        title="Các dịch vụ chính"
        bordered={false}
        style={{
          marginTop: 30,
        }}
      >
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Card
                style={styleCart}
                onClick={() =>
                  navigate("/san-pham-va-dich-vu/dich-vu/lap-dat-moi")
                }
              >
                <Row className="row">
                  <Image preview={false} src={lapdatdichuyenmay} />
                </Row>
                <Row className="row">
                  <Typography.Text
                    className="text"
                    style={{
                      color: "rgb(21, 67, 152)",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Lắp đặt/di chuyển máy nước
                  </Typography.Text>
                </Row>
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Card
                style={styleCart}
                onClick={() =>
                  navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
                }
              >
                <Row className="row">
                  <Image preview={false} src={hoaDonDienTu} />
                </Row>
                <Row className="row">
                  <Typography.Text
                    className="text"
                    style={{
                      color: "rgb(21, 67, 152)",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Sang tên hợp đồng DVCN
                  </Typography.Text>
                </Row>
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Card
                style={styleCart}
                onClick={() =>
                  navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
                }
              >
                <Row className="row">
                  <Image preview={false} src={caplaihopdong} />
                </Row>
                <Row className="row">
                  <Typography.Text
                    className="text"
                    style={{
                      color: "rgb(21, 67, 152)",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Cấp lại hợp đồng DVCN
                  </Typography.Text>
                </Row>
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Card
                style={styleCart}
                onClick={() =>
                  navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
                }
              >
                <Row className="row">
                  <Image preview={false} src={thanhtoantructuyen} />
                </Row>
                <Row className="row">
                  <Typography.Text
                    className="text"
                    style={{
                      color: "rgb(21, 67, 152)",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Thanh toán trực tuyến
                  </Typography.Text>
                </Row>
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Card
                style={styleCart}
                onClick={() =>
                  navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
                }
              >
                <Row className="row">
                  <Image preview={false} src={suachua} />
                </Row>
                <Row className="row">
                  <Typography.Text
                    className="text"
                    style={{
                      color: "rgb(21, 67, 152)",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Sửa chữa(ĐH, mạng lưới cấp cấp nước sau ĐH)
                  </Typography.Text>
                </Row>
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Card
                style={styleCart}
                onClick={() =>
                  navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
                }
              >
                <Row className="row">
                  <Image preview={false} src={dangkithaydoithongtin} />
                </Row>
                <Row className="row">
                  <Typography.Text
                    className="text"
                    style={{
                      color: "rgb(21, 67, 152)",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Đăng ký thay đổi thông tin khách hàng
                  </Typography.Text>
                </Row>
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Card
                style={styleCart}
                onClick={() =>
                  navigate("/san-pham-va-dich-vu/dich-vu/tra-cuu-su-dung-nuoc")
                }
              >
                <Row className="row">
                  <Image preview={false} src={traCuu} />
                </Row>
                <Row className="row">
                  <Typography.Text
                    className="text"
                    style={{
                      color: "rgb(21, 67, 152)",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Tra cứu sử dụng nước
                  </Typography.Text>
                </Row>
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Card
                style={styleCart}
                onClick={() =>
                  navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
                }
              >
                <Row className="row">
                  <Image preview={false} src={hoaDonDienTu} />
                </Row>
                <Row className="row">
                  <Typography.Text
                    className="text"
                    style={{
                      color: "rgb(21, 67, 152)",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Hóa đơn điện tử
                  </Typography.Text>
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
      </Card>
    </Wrapper>
  );
};

export default Services;
