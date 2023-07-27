import React, { useState } from 'react'
import { Wrapper, WrapperButton, WrapperSearch } from './styles'
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select } from 'antd'
import TitleComponent from '../../../components/TitleComponent';
import ListOrder from './components/ListOrder';
import moment from 'moment';
const { Search } = Input;
const { RangePicker } = DatePicker;
const Order = () => {
    const [textSearch, setTextSeach] = useState("");
    const [requestFromDate, setRequestFromDate] = useState("");
    const [requestToDate, setRequestToDate] = useState("");
    const [deliveryFromDate, setDeliveryFromDate] = useState("");
    const [deliveryToDate, setDeliveryToDate] = useState("");
    const [status, setStatus] = useState("");

    const outputFormat = "YYYY-MM-DD";
    
    const handleSearch = (value) => {
        setTextSeach(value);

    };

    const handleDateRangeRequest = (dates) => {

        setRequestFromDate(moment(dates[0].$d).format(outputFormat));
        setRequestToDate(moment(dates[1].$d).format(outputFormat));
        
    };
    const handleDateRangeDelivery = (dates) => {

        setDeliveryFromDate(moment(dates[0].$d).format(outputFormat));
        setDeliveryToDate(moment(dates[1].$d).format(outputFormat));
        
    };

    const handleSelectStatus = (value) =>{
        setStatus(value)
    }
    return (
        <Wrapper>
            <WrapperSearch>

                <Form>
                    <Row gutter={15}>
                        <Col span={8}>
                            <Search
                                onSearch={handleSearch}
                                placeholder="Nhập mã, tên, số điện thoại khách hàng"
                            />

                        </Col>
                        <Col span={6}>
                            <RangePicker
                                placeholder={['Ngày yêu cầu', '']}
                                style={{ width: '100%' }}
                                onChange={handleDateRangeRequest}
                            />

                        </Col>
                        <Col span={6}>
                            <RangePicker
                                placeholder={['Ngày giao hàng', '']}
                                style={{ width: '100%' }}
                                onChange={handleDateRangeDelivery}
                            />

                        </Col>
                        <Col span={4}>
                            <Select
                                defaultValue="Tất cả"
                                placeholder='Trạng thái'
                                style={{ width: '100%' }}
                                onChange={handleSelectStatus}
                                options={[
                                    {
                                        value: 0,
                                        label: 'Tất cả',
                                    },
                                    {
                                        value: 1,
                                        label: 'Chờ xác nhận',
                                    },
                                    {
                                        value: 2,
                                        label: 'Đang giao',
                                    },
                                    {
                                        value: 3,
                                        label: 'Đã giao',

                                    },
                                    {
                                        value: 4,
                                        label: 'Đã huỷ',

                                    },

                                ]}
                            />
                        </Col>
                    </Row>
                </Form>

            </WrapperSearch>
            <Divider />

            <TitleComponent title={'Danh sách đơn hàng'}>
                <WrapperButton>
                    <Button disabled>Xác nhận</Button>
                    <Button disabled>Hoàn thành</Button>
                </WrapperButton>
            </TitleComponent>

            <ListOrder textSearch={textSearch} requestFromDate={requestFromDate} requestToDate={requestToDate} deliveryFromDate={deliveryFromDate} deliveryToDate={deliveryToDate} status={status} />
        </Wrapper>
    )
}

export default Order