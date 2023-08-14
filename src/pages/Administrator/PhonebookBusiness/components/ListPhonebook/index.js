import React, { useEffect, useState } from 'react';
import { ModalStyled, TableStyled, Wrapper, WrapperAction, WrapperBodyModal } from './styles';
import { Modal, Tooltip, message } from 'antd';

import { ReactComponent as ActionEdit } from '../../../../../common/images/button-edit.svg'
import { ReactComponent as ActionDelete } from '../../../../../common/images/button-delete1.svg'
import { ReactComponent as IconDelete } from '../../../../../common/images/icon-delete.svg'
import { DeleteGuest, GetAgent } from '../../../../../services/apis/user';
import { useDispatch, useSelector } from 'react-redux';
import { setListBusiness, setLoading } from '../../../../../reducers/agentDirectory';
import ModalDeleteBusiness from '../ModalDeleteBusiness';
import ModalInsertUpdateBusiness from '../ModalInsertUpdateBusiness';
// import ModalInsertGuest from '../ModalInsertGuest';

const ListPhonebook = ({ listPhonebookGuest, onDelete, onUpdateGuest }) => {
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [recordSelected, setRecordSelected] = useState({})
    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useDispatch()
    const { listBusiness, condition } = useSelector(state => state.agent)
    console.log(listBusiness);

    const getPhonebook = () => {
        dispatch(setLoading())
        GetAgent(condition)
            .then(res => {
                dispatch(setListBusiness(res.Object))
            })
            .finally(() => dispatch(setLoading(false)))
    }

    useEffect(() => {
        getPhonebook()
    }, [condition])


    const handleOkDelete = () => {
        setShowModalDelete(false);
        try {
            const deleteG = async () => {
                await DeleteGuest(recordSelected.UserID)
            }
            deleteG();
            messageApi.success("Xoá thành công")
            onDelete(true)
        } catch (error) {
            messageApi.error(error.Object)
        }

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
                    {record.GuestType === 0 ? <span>Tư nhân</span>
                        : record.GuestType === 1 ? <span>Cơ quan</span>
                            : record.GuestType === 2 ? <span>Đại lý cấp 1</span>
                                : record.GuestType === 3 ? <span>Đại lý cấp 2</span>
                                    : <></>
                    }

                </WrapperAction>
            )
        },
    ];

    return (
        <Wrapper>
            {contextHolder}
            <TableStyled
                columns={columns}
                dataSource={listBusiness}
                bordered
                scroll={{ y: 600 }}

            />
            {showModalDelete && (
                <ModalDeleteBusiness
                    isOpen={showModalDelete}
                    onOk={() => {
                        setShowModalDelete(false)
                        getPhonebook()
                        setRecordSelected({})                        
                    }}
                    onCancel={() => {
                        setShowModalDelete(false)
                    }}
                    recordSelected={recordSelected}
                />
            )}

            {showModalEdit && (
                <ModalInsertUpdateBusiness 
                    isOpen={showModalEdit}
                    recordSelected = {recordSelected}
                    onOk={()=>{
                        setShowModalEdit(false)
                        setRecordSelected({})
                        getPhonebook()
                    }}
                    onCancel={()=>{
                        setShowModalEdit(false)
                        setRecordSelected({})
                    }}
                />
            )}

        </Wrapper>
    );
}
export default ListPhonebook;