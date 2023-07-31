import { Button, Modal, Form, Input, Radio, Row, Col, Checkbox } from 'antd';

function ModalAdd({ open, onOk, onCancel, closeModal }) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
            </Form>
        </Modal>
    );
}

export default ModalAdd;
