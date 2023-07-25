import { Button, Form, Input, Col, Row, Select, Upload } from 'antd';
import { useState } from 'react';
import { FormContactStyled } from '../styles';
import { FileTextFilled } from '@ant-design/icons';
const { Option } = Select;
const FormContact = () => {
    const [form] = Form.useForm();
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <FormContactStyled>
            <Form layout="vertical" form={form}>
                <Form.Item label="Tiêu đề" required rules={[{ required: true, message: 'Please ' }]}>
                    <Input placeholder="Nhập tiêu đề" />
                </Form.Item>
                <Row gutter={30}>
                    <Col span={12}>
                        <Form.Item label="Họ tên" required>
                            <Input placeholder="Nhập họ tên" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Số điện thoại" required>
                            <Input placeholder="Nhập số điện thoại" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={30}>
                    <Col span={12}>
                        <Form.Item label="Tỉnh/Thành Phố" required>
                            <Select placeholder="-- Chọn Tỉnh/Thành Phố --">
                                <Option value="HaNoi">Hà Nội</Option>
                                <Option value="NgheAn">Nghệ An</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Quận/Huyện" required>
                            <Select placeholder="-- Chọn Quận/Huyện --">
                                <Option value="HaDong">Hà Đông</Option>
                                <Option value="DongDa">Đống Đa</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={30}>
                    <Col span={12}>
                        <Form.Item label="Phường/Xã" required>
                            <Select placeholder="-- Phường/Xã --">
                                <Option value="TruongThi">Trường Thi</Option>
                                <Option value="TrieuKhuc">Triều Khúc</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Địa chi liên hệ" required>
                            <Input placeholder="Vui lòng ghi đầy đủ số nhà, đường phố, thôn/tổ dân phố" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item name="noidung" label="Nội dung" rules={[{ required: true, message: 'Please input Intro' }]}>
                    <Input.TextArea style={{ minHeight: 120 }} placeholder="Nhập nội dung" />
                </Form.Item>
                <Form.Item name="upload" valuePropName="fileList" getValueFromEvent={normFile} extra="Dung lượng file tối đa 5MB">
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Row gutter={8} className="form-upload">
                            <Col>
                                <FileTextFilled />
                            </Col>
                            <Col>
                                <div>Đính kèm file</div>
                            </Col>
                        </Row>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" className="form-submit">
                        Gửi
                    </Button>
                </Form.Item>
            </Form>
        </FormContactStyled>
    );
};
export default FormContact;
