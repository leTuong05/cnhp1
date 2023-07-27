import CustomButton from '../../../../components/Button/ButtonPrimary';
import { Row, Col, Input, Divider } from 'antd';
import { colors } from '../../../../styles';
import ListDirector from './components/ListDirector';
import ListDepartment from './components/ListDepartment';
import { ManageSystemStyled } from '../styles';

function UserDirectory() {
    return (
        <ManageSystemStyled>
            <div className="head-group">
                <div className="title">Danh bạ người dùng</div>
                <div>
                    <CustomButton backgroundColor={colors.white}>Xuất file</CustomButton>
                    <CustomButton backgroundColor={colors.white}>Import file</CustomButton>
                    <CustomButton backgroundColor={colors.primary}>Thêm chức danh</CustomButton>
                </div>
            </div>
            <Divider />

            <Row gutter={16}>
                <Col span={5}>
                    <ListDepartment />
                </Col>
                <Col span={19}>
                    <ListDirector />
                </Col>
            </Row>
        </ManageSystemStyled>
    );
}

export default UserDirectory;
