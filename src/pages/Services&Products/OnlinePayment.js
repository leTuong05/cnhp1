import { InfoCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { Col, Divider, Row } from 'antd';
import iconPayOnlLeft from './images/pay-online-1.svg';
import iconPayOnlRight from './images/pay-online-2.svg';
import { ReactSVG } from 'react-svg';
import { PayOnline } from './styles';

import React from 'react';
import { Link } from 'react-router-dom';

const OnlinePayment = () => {
    return (
        <PayOnline>
            <div className="payonline-title">
                Thanh toán trực tuyến
                <Divider />
            </div>
            <Row gutter={4} className="payonline-guide">
                <Col className="guide-icon">
                    <InfoCircleFilled />
                </Col>
                <Col className="guide-text">Click vào đây để xem hướng dẫn thanh toán tiền nước</Col>
                <Divider />
            </Row>
            <Row gutter={30} className="container-content">
                <Col span={12} className="content">
                    <Row>
                        <Col>
                            <div className="content-text">Thanh toán chi phí cấp mới</div>
                            <Link to="/" className="content-icon">
                                <RightCircleFilled /> Thanh toán ngay
                            </Link>
                        </Col>
                        <Col>
                            <ReactSVG
                                src={iconPayOnlLeft}
                                beforeInjection={(svg) => {
                                    svg.classList.add('icon');
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={12} className="content">
                    <Row>
                        <Col>
                            <div className="content-text">Thanh toán tiền nước và dịch vụ khác</div>
                            <Link to="/" className="content-icon">
                                <RightCircleFilled /> Thanh toán ngay
                            </Link>
                        </Col>
                        <Col>
                            <ReactSVG
                                src={iconPayOnlRight}
                                beforeInjection={(svg) => {
                                    svg.classList.add('icon');
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Divider />
        </PayOnline>
    );
};

export default OnlinePayment;
