import CustomButton from '../../../../components/Button/ButtonPrimary';
import { Row, Col, Input, Divider } from 'antd';
import { colors } from '../../../../styles';
import ListPermission from './components/ListPermission';
import { ManageSystemStyled } from '../styles';
function ListUser() {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    return (
        <ManageSystemStyled>
            <div className="form-search">
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                <Divider />
            </div>
            <div className="head-group">
                <div className="title">Danh sách nhóm quyền</div>
                <div>
                    <CustomButton backgroundColor={colors.primary}>Thêm nhóm quyền</CustomButton>
                </div>
            </div>
            <Divider />
            <ListPermission />
        </ManageSystemStyled>
    );
}

export default ListUser;
