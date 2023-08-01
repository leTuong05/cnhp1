import React, { useState } from 'react';
import { ModalStyled, TableStyled, Wrapper, WrapperAction, WrapperBodyModal } from './styles';
import { Modal, Tooltip } from 'antd';

import { ReactComponent as ActionEdit } from '../../../../../common/images/button-edit.svg'
import { ReactComponent as ActionDelete } from '../../../../../common/images/button-delete1.svg'
import { ReactComponent as IconDelete } from '../../../../../common/images/icon-delete.svg'
import { DeleteGuest } from '../../../../../services/apis/User';
import ModalInsertGuest from '../ModalInsertGuest';

const ListPhonebook = ({ listPhonebookGuest,onDelete }) => {
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [recordSelected, setRecordSelected] = useState({})

    const handleOkDelete = () => {
        setShowModalDelete(false);
        const deleteG = async () => {
            await DeleteGuest(recordSelected.UserID)
        }
        deleteG();
        onDelete(true)
    };

    const handleCancelDelete = () => {
        setShowModalDelete(false);
    };
    const handleOkEdit = () => {
        setShowModalDelete(false);
    };

    const handleCancelEdit = () => {
        setShowModalEdit(false);
    };
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            render: (_, __, index) => index + 1,
            width: 60,
        },
        {
            title: (
                <div className='title'>
                    <span>Mã khách hàng</span>
                    <br />
                    <span className='italic'>Tên khách hàng</span>
                </div>
            ),
            dataIndex: '',
            width: 200,
            key: 'name',
            render: (_, record) => (
                <div>
                    <span>{record.UserCode}</span>
                    <br />
                    <span className='italic'>{record.FullName}</span>
                </div>
            ),
        },
        {
            title: (
                <div className='title'>
                    <span>Email</span>
                    <br />
                    <span className='italic'>Số điện thoại</span>
                </div>
            ),
            dataIndex: '',
            width: 200,
            key: '',
            render: (_, record) => (
                <div>
                    <span>{record.PhoneNumber}</span>
                    <br />
                    <span className='italic'>{record.Email}</span>
                </div>
            ),
        },

        {
            title: 'Địa chỉ dùng nước',
            dataIndex: 'Address',
            key: 'Address',

        },
        {
            title: 'Loại khách hàng',
            dataIndex: '',
            key: '',
            render: (_, record) => (
                <WrapperAction>
                    <div className='action'>
                        <Tooltip placement="bottom" title={'Chỉnh sửa'}>
                            <span className='icon-edit'>
                                <ActionEdit onClick={(event) => {
                                    event.stopPropagation();
                                    setShowModalEdit(true)
                                    setRecordSelected(record)
                                }} />
                            </span>
                        </Tooltip>
                        <Tooltip placement="bottom" title={'Xoá'}>
                            <span className='icon-delete'>
                                <ActionDelete onClick={(event) => {
                                    event.stopPropagation();
                                    setShowModalDelete(true)
                                    setRecordSelected(record)
                                }} />
                            </span>
                        </Tooltip>
                    </div>
                    <span>Tư nhân</span>
                </WrapperAction>
            )
        },
    ];

    return (
        <Wrapper>
            <TableStyled
                columns={columns}
                dataSource={listPhonebookGuest}
                bordered
                scroll={{ y: 600 }}

            />
            {showModalDelete && (
                <ModalStyled
                    open={showModalDelete}
                    onOk={handleOkDelete}
                    onCancel={handleCancelDelete}
                    cancelText="Đóng"
                    okText="Đồng ý"
                >

                    <div className='icon'>
                        <IconDelete />
                    </div>
                    <p className='text-confirm'>Bạn có chắc chắn muốn xoá {recordSelected.FullName} </p>


                </ModalStyled>
            )}
            {showModalEdit && (
                <ModalInsertGuest isModalOpen={showModalEdit} onCancel={handleCancelEdit} recordSelected={recordSelected} />
            )}
        </Wrapper>
    );
}
export default ListPhonebook;