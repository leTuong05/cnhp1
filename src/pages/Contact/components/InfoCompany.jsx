import { Card, Col, Divider, Select, Row } from "antd";
import React from "react";
import { CompanyInfoStyled } from "../styles";
function InfoCompany() {
  return (
    <CompanyInfoStyled>
      <div className="contact-title">
        Công ty cổ phần cấp nước Hải Phòng
        <Divider />
      </div>
      <Card title="PHÒNG TIẾP CÔNG DÂN CỦA CẤP NƯỚC HẢI PHÒNG" bordered={false}>
        <Row className="card-content">
          <Col span={5} className="card-left">
            Địa chỉ
          </Col>
          <Col span={19} className="card-right">
            Số 54 Đinh Tiên Hoàng, P. Hoàng Văn Thụ, Q. Hồng Bàng, TP. Hải Phòng
          </Col>
          <Col span={5} className="card-left">
            Giờ làm việc
          </Col>
          <Col span={19} className="card-right">
            Thứ 2 - Thứ 6 <br />
            Sáng: 08:00 - 12:00, Chiều: 13:00 - 17:00
          </Col>
        </Row>
      </Card>
      <Card title="PHÒNG GIAO DỊCH KHÁCH HÀNG" bordered={false} style={{marginTop: '24px'}}>
        <Row className="card-content">
          <Col span={5} className="card-left">
            Địa chỉ
          </Col>
          <Col span={19} className="card-right">
            Số 54 Đinh Tiên Hoàng, P. Hoàng Văn Thụ, Q. Hồng Bàng, TP. Hải Phòng
          </Col>
          <Col span={5} className="card-left">
            Giờ làm việc
          </Col>
          <Col span={19} className="card-right">
            Thứ 2 - Thứ 6 <br />
            Sáng: 08:00 - 12:00, Chiều: 13:00 - 17:00
          </Col>
          <Col span={5} className="card-left">
            Số điện thoại
          </Col>
          <Col span={19} className="card-right">
            0225.3745377
          </Col>
        </Row>
      </Card>
      <div className="contact-title">
        Công ty cổ phần cấp nước Hải Phòng
        <Divider />
      </div>
      <Select placeholder="--Chọn đơn vị thành viên--">
        <Select.Option />
      </Select>
    </CompanyInfoStyled>
  );
}

export default InfoCompany;
