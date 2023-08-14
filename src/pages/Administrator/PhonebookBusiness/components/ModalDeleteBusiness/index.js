import React from 'react'
import { ModalStyled } from './styles'
import { ReactComponent as IconDelete } from '../../../../../common/images/icon-delete.svg'
import { DeleteAgent } from '../../../../../services/apis/user'
import { message } from 'antd'
const ModalDeleteBusiness = ({ isOpen, onCancel, recordSelected, onOk }) => {
    const [messageApi, contextHolder] = message.useMessage()
    const deleteBusiness = () => {
        DeleteAgent(recordSelected.UserID).then(res => {
            if (res) {
                onOk()
                messageApi.success("Xóa thành công")
            }
        })
    }

    const handleDelete = () => {
        deleteBusiness()
    }
    console.log(recordSelected);
    return (
        <ModalStyled
            open={isOpen}
            onCancel={onCancel}
            onOk={handleDelete}
            cancelText="Đóng"
            okText="Đồng ý"
        >
            {contextHolder}
            <div className='icon'>
                <IconDelete />
            </div>
            <p className='text-confirm'>Bạn có chắc chắn muốn xoá {recordSelected?.FullName} </p>

        </ModalStyled>
    )
}

export default ModalDeleteBusiness