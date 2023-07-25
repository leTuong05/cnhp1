import React from "react";
import { Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";
import { LayoutStyled } from "./styled";

const FooterContent = () => {
  return (
    <LayoutStyled>
      <div>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                color: "#154398",
                fontSize: 16,
                fontWeight: 600,
                marginBottom: "30px",
              }}
            >
              CÔNG TY CỔ PHẦN CẤP NƯỚC HẢI PHÒNG
            </div>
            <Row gutter={10}>
              <Col style={{ minWidth: "60px", color: "#838383" }}>Địa Chỉ:</Col>
              <Col>
                Số 54 Đinh Tiên Hoàng, P. Hoàng Văn Thụ, Q. Hồng Bàng, TP. Hải
                Phòng
              </Col>
            </Row>
            <Row gutter={10}>
              <Col style={{ minWidth: "60px", color: "#838383" }}>Tel:</Col>
              <Col>0225.3745377</Col>
            </Row>
            <Row gutter={10}>
              <Col style={{ minWidth: "60px", color: "#838383" }}>Fax:</Col>
              <Col>0225.3823748 </Col>
            </Row>
            <Row gutter={10}>
              <Col style={{ minWidth: "60px", color: "#838383" }}>Email:</Col>
              <Col>congtycophancapnuochaiphong@gmail.com </Col>
            </Row>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              color: "#838383",
            }}
          >
            <div
              style={{
                color: "#154398",
                fontSize: 16,
                fontWeight: 600,
                marginBottom: "30px",
              }}
            >
              Tra cứu thông tin
            </div>
            <Row>
              <Link to="cham-soc-khach-hang/tra-cuu-thong-tin/lich-tam-ngung-cap-nuoc">
                Lịch tạm ngưng cấp nước
              </Link>
            </Row>
            <Row>
              <Link to="/cham-soc-khach-hang/tra-cuu-thong-tin/tra-cuu-chi-so-cong-to">
                Tra cứu sử dụng nước
              </Link>
            </Row>
            <Row>
              <Link to="/cham-soc-khach-hang/tra-cuu-thong-tin/lich-ghi-chi-so-cong-to">
                Lịch ghi chỉ số công tơ
              </Link>
            </Row>
            <Row>
              <Link to="/cham-soc-khach-hang/tra-cuu-thong-tin/luong-nuoc-tieu-thu">
                Lượng nước tiêu thụ
              </Link>
            </Row>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              color: "#838383",
            }}
          >
            <div
              style={{
                color: "#154398",
                fontSize: 16,
                fontWeight: 600,
                marginBottom: "30px",
              }}
            >
              Tra cứu thông tin
            </div>
            <Row>
              <Link to="san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu">
                Hóa đơn tiền nước
              </Link>
            </Row>
            <Row>
              <Link to="san-pham-va-dich-vu/dich-vu/thanh-toan-truc-tuyen">
                Thanh toán trực tuyến
              </Link>
            </Row>
            <Row>
              <Link to="">Thanh toán tại điểm thu tiền nước</Link>
            </Row>
            <Row>
              <Link to="">Lịch sử thanh toán</Link>
            </Row>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              color: "#838383",
            }}
          >
            <div
              style={{
                color: "#154398",
                fontSize: 16,
                fontWeight: 600,
                marginBottom: "30px",
              }}
            >
              Chính sách và quy định
            </div>
            <Row>
              <Link to="cham-soc-khach-hang/chinh-sach-chung">
                Chính sách thanh toán
              </Link>
            </Row>
            <Row>
              <Link to="cham-soc-khach-hang/chinh-sach-chung">
                Chính sách xử lý khiếu nại
              </Link>
            </Row>
            <Row>
              <Link to="cham-soc-khach-hang/chinh-sach-bao-mat">
                Chính sách bảo mật thông tin
              </Link>
            </Row>
          </Col>
        </Row>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row>
            <div
              style={{ fontSize: "12px", fontWeight: 600, color: "#838383" }}
            >
              <span style={{ color: "black" }}>© 2021</span> Bản quyền thuộc{" "}
              <span style={{ color: "black" }}>
                CÔNG TY CỔ PHẦN CẤP NƯỚC HẢI PHÒNG{" "}
              </span>
            </div>
            <br />
          </Row>
          <Row>
            <div
              style={{ fontSize: "12px", fontWeight: 600, color: "#838383" }}
            >
              ĐKKD 0200171274 do Sở KHĐT Tp. Hải Phòng cấp ngày 03/07/2018 (Thay
              đổi lần 9)
            </div>
          </Row>
        </div>
      </div>
    </LayoutStyled>
  );
};

export default FooterContent;
