import { Form, message, Upload, Row, Col, Input, DatePicker, Button } from 'antd';
import { FileImageOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import TinyEditor from './TinyEditor';
import { colors } from '../../../../styles';
import { ModalStyled } from './styles';
import CustomUpload from '../../../../components/Upload';
import React, { useState } from 'react';
import { fetchAddProduct } from '../../../../reducers/productSlice';
import { v4 as uuidv4 } from 'uuid';

import { useSelector, useDispatch } from 'react-redux';
function CustomModal({ open, onOk, onCancel, onClick }) {
    const [nameProduct, setNameProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [stockProduct, setStockProduct] = useState('');
    const [imgProduct, setImgProduct] = useState(undefined);
    // const [fileList, setFileList] = useState([]);

    const dispatch = useDispatch();
    console.log('nameProduct', nameProduct);

    const props = {
        beforeUpload: (file) => {
            return new Promise((resolve, reject) => {
                if (file.size > 9000000) {
                    reject('File size exceeded');
                    // message.error("File size exceeded");
                } else {
                    resolve('Success');
                }
            });
        },
        customRequest: (info) => {
            setImgProduct([info.file]);
        }
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(
            fetchAddProduct({
                ProductID: uuidv4(),
                ProductName: nameProduct,
                Price: priceProduct,
                QuantityStock: stockProduct,
                fileImg: imgProduct
            })
        );
        // .then(() => {
        //     dispatch(
        //         fetchPosition({
        //             TextSearch: '',
        //             PageSize: 20,
        //             CurrentPage: 1
        //         })
        //     );
        // });
    };

    // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    // console.log('fileList', fileList);
    return (
        <ModalStyled title="Thêm sản phẩm" open={open} onOk={onOk} onCancel={onCancel} width={1024} footer={null}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Hình ảnh sản phẩm"
                    name="Image"
                    valuePropName="fileList"
                    required
                    className="upload-form"
                    getValueFromEvent={(event) => {
                        return event?.fileList;
                    }}
                    rules={[
                        {
                            required: true
                        },
                        {
                            validator(_, fileList) {
                                return new Promise((resolve, reject) => {
                                    if (fileList && fileList[0].size > 90000000) {
                                        reject('File size exceeded');
                                    } else {
                                        resolve('Success');
                                    }
                                });
                            }
                        }
                    ]}
                >
                    <CustomUpload {...props} showUploadList={false}>
                        <div className="upload-items">
                            <FileImageOutlined />
                            <div style={{ color: colors.primary, fontSize: 12, fontWeight: 600 }}>Chọn ảnh</div>
                        </div>
                    </CustomUpload>
                    <span className="upload-text">Dung lượng file tối đa 5MB, định dạng:.JPG, .JPEG, .PNG, .SVG</span>
                </Form.Item>
                <Form.Item label="Video sản phẩm" valuePropName="fileList" required className="upload-form">
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
                <Form.Item label="Tên sản phẩm" name="ProductName" required>
                    <Input
                        placeholder="Nhập tên"
                        onChange={(e) => {
                            setNameProduct(e.target.value);
                        }}
                    />
                </Form.Item>
                <Row gutter={30}>
                    <Col span={12}>
                        <Form.Item label="Đơn giá" name="Price" required>
                            <Input
                                type="number"
                                placeholder="Nhập giá"
                                onChange={(e) => {
                                    setPriceProduct(e.target.value);
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Kho hàng" name="QuantityStock" required>
                            <Input
                                type="number"
                                placeholder="Nhập số lượng"
                                onChange={(e) => {
                                    setStockProduct(e.target.value);
                                }}
                            />
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
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={onClick}>
                        Hoàn tất
                    </Button>
                </Form.Item>
            </Form>
        </ModalStyled>
    );
}

export default CustomModal;
