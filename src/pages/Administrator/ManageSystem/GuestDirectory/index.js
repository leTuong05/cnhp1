import { Col, Divider, Row, Input } from 'antd';
import { ManageSystemStyled } from '../styles';
import CustomButton from '../../../../components/Button/ButtonPrimary';
import { colors } from '../../../../styles';
import ListLocation from './components/ListLocation';
import ListGuest from './components/ListGuest';

const { Search } = Input;

function GuestDirectory() {
    const onSearch = (value) => console.log(value);
    return (
        <ManageSystemStyled>
            <div className="form-search">
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                <Divider />
            </div>
            <div className="head-group">
                <div className="title">Danh bạ khách hàng</div>
                <CustomButton backgroundColor={colors.primary}>Thêm khách hàng</CustomButton>
            </div>
            <Divider />
            <Row gutter={16}>
                <Col span={5}>
                    <ListLocation />
                </Col>
                <Col span={19}>
                    <ListGuest />
                </Col>
            </Row>
        </ManageSystemStyled>
    );
}

export default GuestDirectory;
