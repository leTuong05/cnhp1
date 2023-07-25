import React from 'react'
import { Wrapper, WrapperSearch } from './styles'
import { Col, DatePicker, Form, Row, Select } from 'antd'
import { Input, Space } from 'antd';
import moment from 'moment';
import TitleComponent from '../../../components/TitleComponent';

import ListBill from './components/ListBill';

import ListAdress from './components/ListAdress';
import { useState } from 'react';
// import Search from 'antd/es/transfer/search'
const { Search } = Input;
const WaterBill = () => {
    const defaultDate = moment();
    const [selectedRegionId, setSelectedRegionId] = useState(null);
    const [textSearch, setTextSearch] = useState("");
    const [status, setStatus] = useState(null);
    const [month, setMonth] = useState(defaultDate.month() + 1);
    const [year, setYear] = useState(defaultDate.year());


    const handleRegionSelect = (regionId) => {
        setSelectedRegionId(regionId);

    };

    const handleSearch = (value) => {
        console.log('Search value:', value);
        setTextSearch(value);
    };

    const handleStatus = (value) => {
        setStatus(value)
    }

    const handleDate = (date) => {
        if (date) {
            const selectedMonth = date.month() + 1;
            const selectedYear = date.year();
            setMonth(selectedMonth);
            setYear(selectedYear);
        } else {
            setMonth(defaultDate.month() + 1);
            setYear(defaultDate.year());
        }
    };
    // const disabledDate = (current) => {
    //     // Can not select days before today and today
    //     return current && current > moment().endOf('month');
    // };
    return (
        <Wrapper>
            <WrapperSearch>
                <Form>
                    <Row gutter={15}>
                        <Col span={16}>
                            <Search
                                placeholder="Nhập mã, tên, số điện thoại khách hàng"
                                onSearch={handleSearch}
                            />
                        </Col>
                        <Col span={4}>
                            <DatePicker
                                style={{ width: '100%' }}
                                onChange={handleDate}
                                picker="month"
                                placeholder='Tháng'
                                format="MM/YYYY"
                                showToday={true}
                                defaultValue={defaultDate}
                            />
                        </Col>
                        <Col span={4}>
                            <Select
                                defaultValue="Tất cả"
                                placeholder='Trạng thái'
                                style={{ width: '100%' }}
                                onChange={handleStatus}
                                options={[
                                    {
                                        value: 0,
                                        label: 'Tất cả',
                                    },
                                    {
                                        value: 1,
                                        label: 'Chưa nhập phiếu mới',
                                    },
                                    {
                                        value: 2,
                                        label: 'Đang thu',
                                    },
                                    {
                                        value: 3,
                                        label: 'Đã thanh toán',

                                    },
                                    {
                                        value: 4,
                                        label: 'Quá hạn nộp',

                                    },
                                    {
                                        value: 5,
                                        label: 'Đã cắt nước',
                                    },
                                ]}
                            />
                        </Col>
                    </Row>
                </Form>
            </WrapperSearch>

            <TitleComponent title={'Hoá đơn nước'} />

            <Row gutter={16}>
                <Col span={5}>
                    <ListAdress onSelectRegion={handleRegionSelect} />
                </Col>
                <Col span={19}>
                    <ListBill RegionId={selectedRegionId} TextSearch={textSearch} Status={status} Month={month} Year={year} />
                </Col>
            </Row>
        </Wrapper>
    )
}

export default WaterBill