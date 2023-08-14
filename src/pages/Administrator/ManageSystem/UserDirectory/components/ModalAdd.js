import { Button, Modal, Form, Input, Upload, Row, Col, Checkbox, message } from 'antd';
import CustomUpload from '../../../../../components/Upload';
import { FileImageOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { colors } from '../../../../../styles';

function ModalAdd({ open, onOk, onCancel, closeModal }) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const props = {
        beforeUpload: (file) => {
            const isPNG = file.type === 'image/png';
            if (!isPNG) {
                message.error(`${file.name} is not a png file`);
            }
            return isPNG || Upload.LIST_IGNORE;
        },
        onChange: (info) => {
            // setImgProduct(info.fileList);
        }
    };

    return (
        <Modal title="Basic Modal" footer={null} open={open} onOk={onOk} onCancel={onCancel} width={1200}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Hình ảnh sản phẩm" name="Image" valuePropName="fileList" required className="upload-form">
                    <CustomUpload {...props}>
                        <div className="upload-items">
                            <FileImageOutlined />
                            <div style={{ color: colors.primary, fontSize: 12, fontWeight: 600 }}>Chọn ảnh</div>
                        </div>
                    </CustomUpload>
                    <span className="upload-text">Dung lượng file tối đa 5MB, định dạng:.JPG, .JPEG, .PNG, .SVG</span>
                </Form.Item>
                <Form.Item label="Họ và tên" name="name" required>
                    <Input type="text" placeholder="Nhập tên" />
                </Form.Item>
                <Row gutter={30}>
                    <Col span={12}>
                        <Form.Item label="Tên tài khoản" name="acc" required>
                            <Input type="text" placeholder="Nhập tên" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Mã nhân viên" name="ma" required>
                            <Input type="number" placeholder="Nhập mã" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={30}>
                    <Col span={12}>
                        <Form.Item label="Số điện thoại" name="acc" required>
                            <Input type="text" placeholder="Nhập tên" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Email" name="mail" required>
                            <Input type="text" placeholder="Nhập " />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Hoàn tất
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalAdd;
