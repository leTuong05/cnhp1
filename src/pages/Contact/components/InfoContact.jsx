import { Card, Col, Divider, Row } from 'antd';
import React from 'react';
import icon_diachi1 from '../images/icon_diachi-1.svg';
import icon_diachi2 from '../images/icon_diachi-2.svg';
import icon_diachi3 from '../images/icon_diachi-3.svg';
import icon_diachi4 from '../images/icon_diachi-4.svg';
import icon_fb from '../images/icon_fb.svg';
import icon_youtube from '../images/icon_youtube.svg';
import icon_zalo from '../images/icon_zalo.svg';
import { ContactStyled } from '../styles';

function InfoContact() {
    return (
        <ContactStyled>
            <div className="contact-title">
                Thông tin liên hệ
                <Divider />
            </div>
            <Card className="contact-address">
                <Row>
                    <Col>
                        <div className="card-title">Địa chỉ</div>
                        <div className="card-text">Số 54 Đinh Tiên Hoàng, P. Hoàng Văn Thụ, Q. Hồng Bàng, TP. Hải Phòng</div>
                    </Col>
                    <Col>
                        <img src={icon_diachi1} />
                    </Col>
                </Row>
            </Card>
            <Card className="contact-hotline">
                <Row>
                    <Col>
                        <div className="card-title">Đường dây nóng</div>
                        <div className="card-hotline">3.515.858</div>
                    </Col>
                    <Col>
                        <img src={icon_diachi2} />
                    </Col>
                </Row>
            </Card>
            <Card className="contact-email">
                <Row>
                    <Col>
                        <div className="card-title">Hộp thư điện tử</div>
                        <div className="card-text">congtycophancapnuoc haiphong@gmail.com</div>
                    </Col>
                    <Col>
                        <img src={icon_diachi3} />
                    </Col>
                </Row>
            </Card>
            <Card className="contact-social">
                <Row>
                    <Col>
                        <div className="card-title">Liên kết mạng xã hội</div>
                        <Row className="social-item">
                            <Col>
                                <img src={icon_fb} />
                            </Col>
                            <Col>
                                <img src={icon_youtube} />
                            </Col>
                            <Col>
                                <img src={icon_zalo} />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img src={icon_diachi4} />
                    </Col>
                </Row>
            </Card>
        </ContactStyled>
    );
}

export default InfoContact;
