import React from 'react';
import { Button, Col, Dropdown, Input, Row, Space } from 'antd';

const items = [
    {
      key: '1',
      label: (
        <a target="_blank">
          Không hoạt động
        </a>
      ),
    },
  ];
const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchStatus = () => {
  return (
    <>
        <Row gutter={16}>
            <Col span={8} >
                <Space direction="vertical" >
                    <Search
                        placeholder="Nhập mã, tên, SĐT khách hàng"
                        onSearch={onSearch}
                        style={{
                            width: '100%',
                        }}
                    />
                </Space>    
            </Col>
            <Col span={4}>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                    arrow
                    style={{width: '100vh'}}
                    >
                    <Button style={{width: '100%'}}>Đang hoạt động</Button>
                </Dropdown>
            </Col>
            <Col span={4}>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                    arrow
                    >
                    <Input placeholder='Tỉnh/Thành phố'/>
                </Dropdown>
            </Col>
            <Col span={4}>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                    arrow
                    >
                    <Input placeholder='Quận/Huyện'/>
                </Dropdown>
            </Col>
            <Col span={4}>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                    arrow
                    >
                    <Input placeholder='Xã/Phường'/>
                </Dropdown>
            </Col>
        </Row>
    </>
  )
}

export default SearchStatus