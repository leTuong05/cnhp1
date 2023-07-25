import React, { useState } from 'react'
import { WapperModal } from './style'
import { Button } from 'antd'
import TableComponent from './Taable'

const Modals = (props) => {
    const {title, visible, onOk, onCancel} = props

    return (
        <WapperModal 
            title={title}
            onOk={onOk}
            onCancel={onCancel}
            visible={visible}
            // open={open}
            // confirmLoading={confirmLoading}
            width={1024}
            >
            <Button type="primary" style={{color:'red', border: '1px solid red', float: 'right', marginBottom: '20px'}}>Cắt nước</Button>
            <TableComponent />
        </WapperModal>
    )
}

export default Modals