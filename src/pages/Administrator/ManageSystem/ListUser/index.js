import CustomButton from '../../../../components/Button/ButtonPrimary';
import { Row, Col, Input, Divider } from 'antd';
import { colors } from '../../../../styles';
import ListPermission from './components/ListPermission';
import { ManageSystemStyled } from '../styles';
import ModalAdd from './components/ModalAdd';
import { useState } from 'react';
function ListUser() {
    const { Search } = Input;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSearch = (value) => console.log(value);
    return (
        <ManageSystemStyled>
            <div className="form-search">
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                <Divider />
            </div>
            <div className="head-group">
                <div className="title">Danh sách nhóm quyề</div>
                <div>
                    <CustomButton
                        backgroundColor={colors.primary}
                        onClick={() => {
                            setIsModalOpen(true);
                        }}
                    >
                        Thêm nhóm quyền
                    </CustomButton>
                </div>
            </div>
            <Divider />
            <ListPermission />
            <ModalAdd
                open={isModalOpen}
                closeModal={() => {
                    setIsModalOpen(false);
                }}
            />
        </ManageSystemStyled>
    );
}

export default ListUser;
