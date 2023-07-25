import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input } from 'antd';

function ModalUpdate({ open, onOk, onCancel, dataInfo, onFinish, onPositionChange, onNoteChange, closeModalClick }) {
    // console.log('HQUAN', dataInfo.PositionName);

    const [fields, setFields] = useState([]);
    useEffect(() => {
        // Kiểm tra nếu dataInfo có giá trị, thì cập nhật fields
        if (dataInfo) {
            setFields([
                {
                    name: ['PositionName'],
                    value: dataInfo.PositionName
                },
                {
                    name: ['Note'],
                    value: dataInfo.Note
                }
            ]);
        }
    }, [dataInfo]);
    return (
        <Modal title="Basic Modal" open={open} onOk={onOk} onCancel={onCancel} footer={null}>
            <Form onFinish={onFinish} fields={fields} layout="vertical">
                <Form.Item label="Chức danh" name="PositionName" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="Nhập tên chức danh" onChange={onPositionChange} />
                </Form.Item>
                <Form.Item label="Ghi chú" name="Note" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input placeholder="Nhập ghi chú" onChange={onNoteChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={closeModalClick}>
                        Hoàn tất
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalUpdate;
