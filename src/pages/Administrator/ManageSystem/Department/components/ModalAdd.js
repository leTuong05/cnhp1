import { Button, Modal, Form, Input } from 'antd';

function ModalAdd({ openModalAdd, onModalAddOk, onModalAddCancel, closeModalAddClick, onFormAddFinish, onNameAddChange, onNoteAddChange }) {
    return (
        <Modal title="Basic Modal" open={openModalAdd} onOk={onModalAddOk} onCancel={onModalAddCancel} footer={null}>
            <Form layout="vertical" onFinish={onFormAddFinish}>
                <Form.Item label="Chức danh" name="PositionName" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="Nhập tên chức danh" onChange={onNameAddChange} />
                </Form.Item>
                <Form.Item label="Ghi chú" name="Note" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input placeholder="Nhập ghi chú" onChange={onNoteAddChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={closeModalAddClick}>
                        Hoàn tất
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalAdd;
