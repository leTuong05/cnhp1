import { Form, Modal, Upload, Row, Col, Input, DatePicker } from 'antd';
import { FileImageOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import TinyEditor from './TinyEditor';
import { colors } from '../../../../styles';
import { ModalStyled } from './styles';
import CustomUpload from '../../../../components/Upload';
import React, { useState } from 'react';
function CustomModal({ open, onOk, onCancel }) {
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const [fileList, setFileList] = useState([]);
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    return (
        <ModalStyled title="Thêm sản phẩm" open={open} onOk={onOk} onCancel={onCancel} width={1024}>
            <Form>
                <Form.Item label="Hình ảnh sản phẩm" valuePropName="fileList" getValueFromEvent={normFile} required className="upload-form">
                    <CustomUpload fileList={fileList} onChange={handleChange}>
                        {fileList.length >= 10 ? null : (
                            <div className="upload-items">
                                <FileImageOutlined />
                                <div style={{ color: colors.primary, fontSize: 12, fontWeight: 600 }}>Chọn ảnh</div>
                            </div>
                        )}
                    </CustomUpload>
                    <span className="upload-text">Dung lượng file tối đa 5MB, định dạng:.JPG, .JPEG, .PNG, .SVG</span>
                </Form.Item>
                <Form.Item label="Video sản phẩm" valuePropName="fileList" getValueFromEvent={normFile} required className="upload-form">
                    <Upload action="/upload.do">
                        <div className="upload-items">
                            <VideoCameraAddOutlined />
                            <div style={{ color: colors.primary, fontSize: 12, fontWeight: 600 }}>Chọn video</div>
                        </div>
                    </Upload>
                    <ul className="upload-list-text">
                        <li>Kích thước tối đa 30Mb, độ phân giải không vượt quá 1280x1280px</li>
                        <li>Độ dài: 10s - 60s</li>
                        <li>Định dạng: MP4 (không hỗ trợ xp9)</li>
                        <li>Lưu ý: Sản phẩm có thể hiển thị trong khi video đang được xử lý. Video sẽ tự động hiển thị sau khi đã xử lí thành công</li>
                    </ul>
                </Form.Item>
            </Form>
            <Form layout="vertical">
                <Form.Item label="Tên sản phẩm" required>
                    <Input placeholder="Nhập tên" />
                </Form.Item>
                <Row gutter={30}>
                    <Col span={12}>
                        <Form.Item label="Đơn giá" required>
                            <Input placeholder="Nhập giá" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Kho hàng" required>
                            <Input placeholder="Nhập số lượng" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="Mô tả">
                    <TinyEditor />
                </Form.Item>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item className="mb-unset" label="Thời gian khuyến mại" name="DiscountDate">
                            <DatePicker.RangePicker />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="% Khuyến mại">
                            <Input placeholder="Nhập phần trăm khuyến mại" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </ModalStyled>
    );
}

export default CustomModal;
