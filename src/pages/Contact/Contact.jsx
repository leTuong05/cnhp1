import { Col, Row } from 'antd';
import React from 'react';
import InfoContact from './components/InfoContact';
import InfoCompany from './components/InfoCompany';
import FormContact from './components/FormContact';
import Maps from './components/Maps';
import { ContactContainerStyled } from './styles';
const LienHe = () => {
    return (
        <ContactContainerStyled>
            <Row gutter={30} style={{ marginBottom: '60px' }}>
                <Col span={12}>
                    <InfoContact />
                </Col>
                <Col span={12}>
                    <InfoCompany />
                </Col>
            </Row>
            <Maps />
            <div className="title">Liên hệ với chúng tôi</div>
            <FormContact />
        </ContactContainerStyled>
    );
};

export default LienHe;
