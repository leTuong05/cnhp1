import { Button, Col, DatePicker, Form, Input, Modal, Row, Select, message } from 'antd'
import React, { useEffect, useState } from 'react'
import TitleComponent from '../../../../../components/TitleComponent'
import { ModalStyled } from './styles'
import { useForm } from 'antd/es/form/Form';
import moment from 'moment';
import 'moment/locale/vi';
import { InserAgent, InsertGuest, UpdateAgent, UpdateGuest } from '../../../../../services/apis/user';
import { GetRegionByParentId } from '../../../../../services/apis/Region';
import { GetListLocation } from '../../../../../services/apis/GetListLocation';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../../reducers/agentDirectory';

const ModalInsertUpdateBusiness = ({ isOpen, onCancel, onOk, recordSelected }) => {
    console.log(recordSelected);
    const [form] = Form.useForm()
    const [messageApi, contextHolder] = message.useMessage();
    const [listProvince, setListProvince] = useState([
        {
            RegionID: 4050,
            RegionName: 'Hải Phòng'
        }
    ])
    const [districtParentID, setDistrictParentID] = useState()
    const [listDistrict, setListDistrict] = useState([])
    const [wardParentID, setWardParentID] = useState()
    const [listWard, setListWard] = useState([])
    const phoneNumberRegex = /^(\+?84|0)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-46-9])[0-9]{7}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{4,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const dispatch = useDispatch()
    const getDistrict = (districtParentID) => {
        GetListLocation(districtParentID).then((res) => {
            if (res) {
                setListDistrict(res?.Object)
            }
        }).finally(() => {
            console.log('no data');
        })
    }
    const getWard = (wardParentID) => {
        GetListLocation(wardParentID).then((res) => {
            setListWard(res?.Object)
        }).finally(() => {
            console.log('no data');
        })
    }

    useEffect(() => {
        getDistrict(districtParentID)
    }, [districtParentID])

    useEffect(() => {
        getWard(wardParentID)

    }, [wardParentID])

    const handleFormSubmit = () => {
        if (!recordSelected) {
            form.validateFields().then((values) => {
                const body = {
                    FullName: values?.FullName,
                    UserCode: values?.UserCode,
                    Email: values?.Email,
                    PhoneNumber: values?.PhoneNumber,
                    NumberEmployees: values?.NumberEmployees,
                    UserName: values?.UserName,
                    Password: values?.Password,
                    RePassword: values?.RePassword,
                    ProvinceID: values?.ProvinceID,
                    DistrictID: values?.DistrictID,
                    WardID: values?.WardID,
                    Address: values?.Address
                }
                dispatch(setLoading(true))
                InserAgent(body).then(res => {
                    messageApi.success(res?.Object)
                    onOk()
                }).catch(error => {
                    console.error('Error:', error);
                    messageApi.error(error?.Object)
                }).finally(() => {
                    dispatch(setLoading(false))
                })
            }).catch((errors) => {
                console.log('Errors:', errors);
            });
        } else {
            form.validateFields().then((values) => {
                const body = {
                    UserID:recordSelected?.UserID,
                    FullName: values?.FullName,
                    
                    Email: values?.Email,
                    PhoneNumber: values?.PhoneNumber,
                    NumberEmployees: values?.NumberEmployees,
                    ProvinceID: values?.ProvinceID,
                    DistrictID: values?.DistrictID,
                    WardID: values?.WardID,
                    Address: values?.Address
                }
                console.log(values);
                dispatch(setLoading(true))
                UpdateAgent(body).then(res => {
                    messageApi.success(res?.Object)
                    onOk()
                }).catch(error => {
                    console.error('Error:', error);
                    messageApi.error(error?.Object)
                }).finally(() => {
                    dispatch(setLoading(false))
                })
            }).catch((errors) => {
                console.log('Errors:', errors);
            });
        }
    }

    useEffect(() => {
        if (recordSelected) {
            form.setFieldsValue({
                FullName: recordSelected.FullName,
                UserCode: recordSelected.UserCode,
                UserID: recordSelected.UserID,
                Email: recordSelected.Email,
                PhoneNumber: recordSelected.PhoneNumber,
                NumberEmployees: recordSelected.NumberEmployees,
                UserName: recordSelected.UserName,
                Address: recordSelected.Address
            })
        }
    }, [recordSelected])
    const renderFooterButtons = () => {
        if (!recordSelected) {
            return (
                <>
                    <Button onClick={onCancel} >
                        Đóng
                    </Button>,
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={handleFormSubmit}
                        form="modalForm"
                    >
                        Ghi lại
                    </Button>,
                </>)
        } else {
            return (
                <>
                    <Button onClick={onCancel} >
                        Đóng
                    </Button>,
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={handleFormSubmit}
                        form="modalForm"
                    >
                        Cập nhật
                    </Button>,
                </>
            )
        }
    }

    return (
        <ModalStyled
            width={1000}
            title={<TitleComponent title={'Thêm khách hàng mới'} />}
            open={isOpen}
            onCancel={onCancel}
            footer={renderFooterButtons()}
        >
            {contextHolder}
            <Form form={form} layout="vertical" id="modalForm" >
                <Row gutter={[20, 20]}>
                    <Col span={24}>
                        <Form.Item
                            name="FullName"
                            label="Tên doanh nghiệp"
                            rules={[
                                {
                                    required: true,
                                    message: 'Thông tin không được để trống',
                                },
                            ]}
                        >
                            <Input placeholder='Tên doanh nghiệp' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="UserCode"
                            label="Mã đăng ký kinh doanh"

                            rules={[
                                {
                                    required: true,
                                    message: 'Thông tin không được để trống',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Nhập mã ĐKKD"
                                disabled={recordSelected ? true : false}
                            />
                        </Form.Item>

                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="Email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Thông tin không được để trống',
                                },
                                {
                                    pattern: emailRegex,
                                    message: 'Email không hợp lệ',
                                },
                            ]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>

                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="PhoneNumber"
                            label="Số điện thoại"
                            rules={[
                                {
                                    required: true,
                                    message: 'Thông tin không được để trống',
                                },
                                {
                                    pattern: phoneNumberRegex,
                                    message: 'Số điện thoại không hợp lệ',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập số điện thoại" />
                        </Form.Item>

                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="NumberEmployees"
                            label="Số lượng nhân viên"
                            rules={[
                                {
                                    required: true,
                                    message: 'Thông tin không được để trống',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập số lượng nhân viên" />
                        </Form.Item>

                    </Col>
                    {!recordSelected && (
                        <>
                            <Col span={8}>
                                <Form.Item
                                    name="UserName"
                                    label="Tài khoản"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Thông tin không được để trống',
                                        },
                                        {
                                            pattern: usernameRegex,
                                            message: 'Tài khoản không hợp lệ. Chỉ sử dụng chữ, số và dấu gạch dưới (_), ít nhất 4 ký tự.',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Nhập tên tài khoản" />
                                </Form.Item>

                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="Password"
                                    label="Mật khẩu"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Thông tin không được để trống',
                                        },
                                        {
                                            pattern: passwordRegex,
                                            message: 'Mật khẩu không hợp lệ. Phải chứa ít nhất 8 ký tự, bao gồm ít nhất 1 chữ cái và 1 số.',
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        placeholder="Mật khẩu"

                                    />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="RePassword"
                                    label="Nhập lại mật khẩu"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Thông tin không được để trống',
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        placeholder="Nhập lại mật khẩu"

                                    />
                                </Form.Item>
                            </Col>
                        </>
                    )}
                    <Col span={8}>
                        <Form.Item
                            name="ProvinceID"
                            label="Tỉnh/Thành phố"
                            rules={[
                                {
                                    required: true,
                                    message: 'Thông tin không được để trống',
                                },
                            ]}
                        >
                            <Select
                                placeholder={'Tỉnh/Thành phố'}
                                onChange={(value) => {
                                    setDistrictParentID(value)
                                }}
                                style={{
                                    width: "100%",
                                }}
                            >
                                {listProvince?.length && listProvince?.map(province => (
                                    <Select.Option key={province.RegionID} value={province.RegionID}>
                                        {province.RegionName}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="Quận/Huyện"
                            name="DistrictID"
                            rules={[
                                {
                                    required: true,
                                    message: 'Thông tin không được để trống',
                                },
                            ]}
                        >
                            <Select
                                style={{
                                    width: "100%",
                                }}
                                placeholder={'Quận/Huyện'}
                                // disabled={districtParentID ? false : true}
                                onChange={(value) => {
                                    setWardParentID(value)
                                    form.setFieldsValue({
                                        WardID: "",
                                    })
                                }}
                            >
                                {listDistrict.map((district) => (
                                    <Select.Option key={district.RegionID} value={district.RegionID}>
                                        {district.RegionName}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="WardID"
                            label="Xã/Phường"

                            rules={[
                                {
                                    required: true,
                                    message: 'Thông tin không được để trống',
                                },
                            ]}
                        >
                            <Select
                                // disabled={wardParentID ? false : true}
                                placeholder={'Xã/Phường'}

                                style={{
                                    width: "100%",
                                }}>

                                {listWard.map((ward) => (
                                    <Select.Option key={ward.RegionID} value={ward.RegionID}>
                                        {ward.RegionName}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                    </Col>

                    <Col span={24}>
                        <Form.Item
                            name="Address"
                            label="Số nhà/tổ/thôn/xóm..."
                            rules={[
                                {
                                    required: true,
                                    message: 'Thông tin không được để trống',
                                },
                            ]}
                        >
                            <Input
                                placeholder='Nhập số nhà/ tổ/ thôn...'
                            />
                        </Form.Item>

                    </Col>

                </Row>
            </Form>
        </ModalStyled>
    )
}

export default ModalInsertUpdateBusiness