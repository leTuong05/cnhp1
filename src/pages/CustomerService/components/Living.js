import { Form, DatePicker, Input, Col, Divider, Row, Table } from 'antd';
import { InfoCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { LivingStyled } from './styles';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
const columns = [
    {
        title: '',
        key: 'name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>
    },
    {
        title: 'Đơn giá (VNĐ/M3)',
        dataIndex: 'unitPrice',
        key: 'unitPrice'
    },
    {
        title: 'TIÊU THỤ(M3)',
        dataIndex: 'consume',
        key: 'consume'
    },
    {
        title: 'Thành tiền(VNĐ)',
        dataIndex: 'price',
        key: 'price'
    }
];
const data = [
    {
        key: '1',
        name: 'Mức 10m3 đầu tiên',
        unitPrice: 5.973,
        consume: 10,
        price: ''
    },
    {
        key: '2',
        name: 'Mức 10m3 đầu tiên',
        unitPrice: 5.973,
        consume: 10,
        price: ''
    },
    {
        key: '3',
        name: 'Mức 10m3 đầu tiên',
        unitPrice: 5.973,
        consume: 10,
        price: ''
    },
    {
        key: '4',
        name: 'Mức 10m3 đầu tiên',
        unitPrice: 5.973,
        consume: 10,
        price: ''
    }
];
function Living() {
    const [form] = Form.useForm();
    return (
        <LivingStyled>
            <Row gutter={4} className="payonline-guide">
                <Col className="guide-icon">
                    <InfoCircleFilled />
                </Col>
                <Col className="guide-text">Click vào đây để xem hướng dẫn thanh toán tiền nước</Col>
                <Divider />
            </Row>
            <div>
                <div className="children-title">
                    <span>1</span>Nhập các thông số
                </div>
                <Form layout="vertical" form={form}>
                    <Row gutter={10} className="container">
                        <Col span={6}>
                            <Form.Item label="Khoảng thời gian (từ ngày đến ngày)">
                                <DatePicker />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Tổng tiêu thụ (m3)">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Số hộ dùng nước (hộ)">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item>
                                <ButtonPrimary>Tính toán</ButtonPrimary>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div>
                <div className="children-title">
                    <span>2</span>Đơn giá
                </div>
                <Table columns={columns} dataSource={data} bordered={false} pagination={false} />
            </div>
            <div>
                <div className="children-title">
                    <span>3</span>Thành tiền
                </div>
            </div>
        </LivingStyled>
    );
}

export default Living;
