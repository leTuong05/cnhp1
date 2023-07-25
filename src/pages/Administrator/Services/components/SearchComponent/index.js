import React from 'react'
import { Wrapper } from './styles'
import { Col, DatePicker, Input, Row, Select } from 'antd'


const { Search } = Input;
const onSearch = (value) => console.log(value);
const SearchComponent = ({ onSearchData }) => {
    const handleSearch = (value) => {
        // Assuming 'data' is the result of the search operation
        onSearchData(value);
    };

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
                        placeholder='Thời gian'
                    />
                </Col>
                <Col span={5}>
                    <Select
                        defaultValue="lucy"
                        style={{
                            width: '100%',
                        }}

                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'Yiminghe',
                                label: 'yiminghe',
                            },
                            {
                                value: 'disabled',
                                label: 'Disabled',
                                disabled: true,
                            },
                        ]}
                    />
                </Col>
            </Row>
        </Wrapper>
    )
}

export default SearchComponent