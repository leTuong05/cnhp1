import { Button, Modal, Form, Input, Radio, Row, Col, Checkbox } from 'antd';

function ModalAdd({ open, onOk, onCancel, closeModal }) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Modal title="Basic Modal" footer={null} open={open} onOk={onOk} onCancel={onCancel} width={1200}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Tên nhóm quyền" name="RoleName" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="Nhập tên" />
                </Form.Item>
                <Form.Item name="radio-group" label="Radio">
                    <Radio.Group>
                        <Radio value="9"> System admin </Radio>
                        <Radio value="1"> Nhân viên </Radio>
                        <Radio value="2"> Khách hàng </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name="checkbox-group" label="Chọn quyền">
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row>
                            <Col span={6}>
                                <Checkbox
                                    value="A"
                                    style={{
                                        lineHeight: '32px'
                                    }}
                                >
                                    Tất cả
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox
                                    value="B"
                                    style={{
                                        lineHeight: '32px'
                                    }}
                                >
                                    Truy cập trang
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox
                                    value="C"
                                    style={{
                                        lineHeight: '32px'
                                    }}
                                >
                                    Tạo phiếu
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox
                                    value="D"
                                    style={{
                                        lineHeight: '32px'
                                    }}
                                >
                                    Cập nhật thông tin
                                </Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={closeModal}>
                        Hoàn tất
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalAdd;
