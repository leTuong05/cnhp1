import React, { useState } from 'react'
import { WapperModal } from './style'
import { Button } from 'antd'
import TableComponent from './Taable'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import TableComponentCustorm from './TableComponentCustorm';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);


const ModalListCustorm = (props) => {
    const {title, visible, onOk, onCancel, columns, dataSource} = props;
    const [searchedData, setSearchedData] = useState([]);//get data sau khi tìm kiếm
    console.log("dataSource", dataSource);

    const onSearch = (value) => {
      const filteredData = dataSource.filter((item) => {
        return item.PhoneNumber.toLowerCase().includes(value.toLowerCase());
      });
      setSearchedData(filteredData);
    }

    return (
      <WapperModal 
            title={title}
            onOk={onOk}
            onCancel={onCancel}
            visible={visible}
            // open={open}
            // confirmLoading={confirmLoading}
            width={1024}
            >
            <Search
                placeholder="Nhâp mã, tên , SĐT khách hàng"
                onSearch={onSearch}
                style={{
                    width: '100%',
                }}
                />
            <TableComponentCustorm columns={columns} dataSource={searchedData.length > 0 ? searchedData : dataSource} />
      </WapperModal>
  )
}

export default ModalListCustorm