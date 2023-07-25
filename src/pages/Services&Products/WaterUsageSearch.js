import React from "react";
import { ContentTop, SelectItem, Wrapper } from './style/TraCuuSuDungNuocStyle';
import { Card, Col, Row } from 'antd';
import { Select } from 'antd';
import { Button, Space } from 'antd';
import { Table, Tag } from 'antd';
import { Descriptions } from 'antd';
import { dataName, dataValue } from '../../fakeData/DataServices/data'
import img1 from '../../common/images/imageHome_page/bieudoDichVu1.png'


const handleChange = (value) => {
  //   console.log(value); 
  };
  
  const columns = [
      {
        title: 'STT',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Tên hàng hóa, dịch vụ',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Thành tiền',
        dataIndex: 'address',
        key: 'address',
      },
      {
          title: 'Thuế GTGT',
          dataIndex: 'address',
          key: 'address',
      },
      {
      title: 'Tổng cộng',
      dataIndex: 'address',
      key: 'address',
      },
  ]
  
  const data = [
      {
        key: '1',
        name: '1',
        age: 'Tiền nước tiêu thụ',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: '2',
        age: 'Tên dịch vụ thoát nước',
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: '3',
        age: 'Tên dịch vụ thoát nước',
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];

const WaterUsageSearch = () => {
  return (
    <Wrapper>
        <h1>Tra cứu sử dụng nước</h1>
        <Card
            title="Tra cứu theo tháng"
            bordered={false}
            style={{
                width: 300,
                marginTop: '20px',
                width: '100%',
            }}
        >
            <ContentTop>
                <Row>
                    <Col span={12} className='col'>
                        <SelectItem className="select">
                        <h2>Mã khách hàng</h2>
                        <Select
                            labelInValue
                            defaultValue={{
                            value: 'lucy',
                            label: 'Lucy (101)',
                            }}
                            style={{
                            width: 470,
                            }}
                            onChange={handleChange}
                            options={[
                            {
                                value: 'jack',
                                label: 'Jack (100)',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy (101)',
                            },
                            ]}
                            />
                        </SelectItem>
                    </Col>
                
                    <Col span={4} className='col'>
                        <SelectItem className="select">
                        <h2>Tháng tra cứu</h2>
                        <Select
                            labelInValue
                            defaultValue={{
                            value: '10',
                            label: '10',
                            }}
                            style={{
                            width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                            {
                                value: '1',
                                label: '1',
                            },
                            {
                                value: '10',
                                label: '10',
                            },
                            ]}
                            />
                        </SelectItem>
                    </Col>

                    <Col span={4} className='col'>
                        <SelectItem className="select">
                        <h2>Năm tra cứu</h2>
                        <Select
                            labelInValue
                            defaultValue={{
                            value: '2022',
                            label: '2022',
                            }}
                            style={{
                            width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                            {
                                value: '2022',
                                label: '2022',
                            },
                            ]}
                        />
                        </SelectItem>
                    </Col>

                    <Col span={4}>
                        <Space wrap>
                            <Button className='btn'>Tra cứu</Button>
                        </Space>
                    </Col>

                </Row>
            </ContentTop>

            <>
                <Descriptions title="" style={{marginBottom: '20px', marginTop: '20px', display: 'flex', }}>
                    <Descriptions.Item label="Mã khách hàng">
                        <span>{dataValue[0].maKH}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Mã khách hàng">
                        <span>{dataValue[0].maKH}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Mã khách hàng">
                        <span>{dataValue[0].maKH}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Mã khách hàng">
                        <span>{dataValue[0].maKH}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Mã khách hàng">
                        <span>{dataValue[0].maKH}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Mã khách hàng">
                        <span>{dataValue[0].maKH}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Mã khách hàng">
                        <span>{dataValue[0].maKH}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Mã khách hàng">
                        <span>{dataValue[0].maKH}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Mã khách hàng">
                        <span>{dataValue[0].maKH}</span>
                    </Descriptions.Item>
                    
                    </Descriptions>
            </>

        </Card>

        

        <Table columns={columns} dataSource={data} />

        <Card
            title="Lịch sử dùng nước"
            bordered={true}
            style={{
                width: 300,
                marginTop: '20px',
                width: '100%',
            }}
        >
            <img src={img1}></img>
        </Card>
    </Wrapper>
  );
};

export default WaterUsageSearch;
