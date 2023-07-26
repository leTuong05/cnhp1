import React from 'react'
import { Wrapper } from './styles'
import { Col, DatePicker, Input, Row, Select } from 'antd'


const { Search } = Input;

const SearchComponent = ({ onSearchData, onSearchDate, onSearchStatus }) => {
    const handleSearch = (value) => {
        // Assuming 'data' is the result of the search operation
        onSearchData(value);
    };

    const handleSearchDate = (date) => {
        onSearchDate(date)
    }
    const handleSelect = (value) => {
        onSearchStatus(value)
    }


    return (
        <Wrapper>
            <Row gutter={16}>
                <Col span={14}>
                    <Search
                        placeholder="Nhập mã, tên, số điện thoại khách hàng"
                        onSearch={handleSearch}
                        style={{
                            width: '100%',
                        }}
                    />

                </Col>
                <Col span={5}>
                    <DatePicker
                        style={{
                            width: '100%',
                        }}
                        format={"DD/MM/YYYY"}
                        placeholder='Thời gian'
                        onChange={handleSearchDate}
                    />
                </Col>
                <Col span={5}>
                    <Select
                        defaultValue="Trạng thái"
                        style={{
                            width: '100%',
                        }}
                        onChange={handleSelect}
                        options={[
                            {
                                value: 0,
                                label: 'Trạng thái',
                            },
                            {
                                value: 1,
                                label: 'Mới',
                            },
                            {
                                value: 2,
                                label: 'Đang hỗ trợ',
                            },
                            {
                                value: 3,
                                label: 'Hoàn thành',
                            },

                        ]}
                    />
                </Col>
            </Row>
        </Wrapper>
    )
}

export default SearchComponent