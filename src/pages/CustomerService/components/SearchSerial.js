import { Form, DatePicker, Row, Col, Input, Button } from 'antd';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import { SearchSerialStyled } from '../styles';

function SearchSerial() {
    const [form] = Form.useForm();

    return (
        <SearchSerialStyled>
            <Form layout="vertical" form={form}>
                <Row gutter={10} className="container">
                    <Col span={6}>
                        <Form.Item label="Mã khách hàng">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Từ ngày">
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Đến ngày">
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item>
                            <ButtonPrimary>Tra cứu</ButtonPrimary>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </SearchSerialStyled>
    );
}

export default SearchSerial;
