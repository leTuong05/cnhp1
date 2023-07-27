import { Button, Modal, Form, Input, Radio, Row, Col, Checkbox } from 'antd';
import { useState } from 'react';

function ModalAdd({ open, onOk, onCancel, closeModal }) {
    const [showCheckboxGroup1, setShowCheckboxGroup1] = useState(true);

    const handleRadioChange = (e) => {
        if (e.target.value === '9') {
            setShowCheckboxGroup1(true);
        } else {
            setShowCheckboxGroup1(false);
        }
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Modal title="Basic Modal" footer={null} open={open} onOk={onOk} onCancel={onCancel}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Tên nhóm quyền" name="RoleName" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="Nhập tên" />
                </Form.Item>
                <Form.Item name="radio-group" label="Radio">
                    <Radio.Group onChange={handleRadioChange}>
                        <Radio value="9"> System admin </Radio>
                        <Radio value="1"> Nhân viên </Radio>
                        {/* <Radio value="2"> Khách hàng </Radio> */}
                    </Radio.Group>
                </Form.Item>
                {showCheckboxGroup1 ? (
                    <Form.Item name="checkbox-group-1" label="Chọn quyền">
                        <Checkbox.Group>
                            <Row>
                                <Col span={6}>
                                    <Checkbox
                                        value="A"
                                        style={{
                                            lineHeight: '32px'
                                        }}
                                    >
                                        A
                                    </Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox
                                        value="B"
                                        style={{
                                            lineHeight: '32px'
                                        }}
                                    >
                                        B
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                ) : (
                    <Form.Item name="checkbox-group-2" label="Chọn quyền">
                        <Checkbox.Group>
                            <Row>
                                <Col span={6}>
                                    <Checkbox
                                        value="C"
                                        style={{
                                            lineHeight: '32px'
                                        }}
                                    >
                                        C
                                    </Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox
                                        value="D"
                                        style={{
                                            lineHeight: '32px'
                                        }}
                                    >
                                        D
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                )}
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
