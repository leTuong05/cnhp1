import React from 'react';
import CustomButton from '../../../../components/Button/ButtonPrimary';
import { colors } from '../../../../styles';
import { Row, Col, Input, Divider } from 'antd';
import { ManageSystemStyled } from '../styles';
import ListLocation from './components/ListLocation';
import ListEnterPrise from './components/ListEnterPrise';

const { Search } = Input;

function EnterPrise() {
    const onSearch = (value) => console.log(value);
    return (
        <ManageSystemStyled>
            <div className="form-search">
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                <Divider />
            </div>
            <div className="head-group">
                <div className="title">Danh bạ doanh nghiệp</div>
                <CustomButton backgroundColor={colors.primary}>Thêm doanh nghiệp</CustomButton>
            </div>
            <Divider />
            <Row gutter={16}>
                <Col span={5}>
                    <ListLocation />
                </Col>
                <Col span={19}>
                    <ListEnterPrise />
                </Col>
            </Row>
        </ManageSystemStyled>
    );
}

export default EnterPrise;
