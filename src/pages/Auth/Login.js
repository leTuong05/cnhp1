import React from "react";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/authReducer";
import { useNavigate } from "react-router-dom";
import img1 from '../../common/images/Sigin1.png'
import img2 from '../../common/images/Sigin5.svg'
import img3 from '../../common/images/Sigin4.svg'
import { Col, Row } from 'antd';
// import Service from '../Home/Service';
import { Button, Checkbox, Form, Input } from 'antd';
import { WapperSigin, FormSigin, ImgFB } from './style';
import Services from '../Services&Products/Services'

function Login() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [form] = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

const onFinish = (values) => {
  dispatch(login({
    "UserName": "Administrator",
    "Password": "Ab@123456",
  }));
};


    if (isAuthenticated === true) {
        navigate("/tong-quan")
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <WapperSigin>
            <div>
                <img src={img1} style={{ width: '100%' }} />
                <Row>
                    <Col span={16}>
                        <Services />
                    </Col>
                    <Col span={8}>
                        <FormSigin>
                            <h1>Đăng nhập</h1>
                            <Form
                                name="basic"
                                labelCol={{
                                    span: 24,
                                }}
                                wrapperCol={{
                                    span: 0,
                                }}
                                style={{
                                    width: 426,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                className='form'
                                layout="vertical"
                                form={form}
                            >
                                <Form.Item
                                    // label="Username"
                                    name="Username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    // label="Password"
                                    name="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    wrapperCol={{
                                        offset: 0,
                                        span: 24,
                                    }}
                                >
                                    <Checkbox >Nhớ thông tin</Checkbox>
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Button type="default" htmlType="submit" className='button'
                                    >
                                        Đăng nhập
                                    </Button>
                                </Form.Item>
                            </Form>
                        </FormSigin>

                        <ImgFB>
                            <img src={img2}></img>
                        </ImgFB>
                    </Col>
                </Row>

                <img src={img3} style={{ marginTop: '100px', width: '100%' }}></img>
            </div>
        </WapperSigin>
    );
}

export default Login;
