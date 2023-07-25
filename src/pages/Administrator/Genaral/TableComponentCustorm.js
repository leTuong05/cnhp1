import React, { useState } from 'react';
import { Button, Table } from 'antd';
const columns1 = [
  {
    title: 'STT',
    dataIndex: 'stt'
  },
  {
    title: 'Mã khách hàng',
    dataIndex: 'codeRequest'
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'personRequest'
  },
  {
    title: 'Email / Số điện thoại',
    dataIndex: 'address'
  },
  {
    title: 'Địa chỉ dùng nước',
    dataIndex: 'reason'
  },
];

const columns2 = [
  {
    title: 'STT',
    dataIndex: 'stt'
  },
  {
    title: 'Tiêu đề',
    dataIndex: 'codeRequest'
  },
  {
    title: 'Người yêu cầu',
    dataIndex: 'personRequest'
  },
  {
    title: 'Email / Số điện thoại',
    dataIndex: 'address'
  },
  {
    title: 'Nội dung',
    dataIndex: 'reason'
  },
  {
    title: 'Ngày yêu cầu',
    dataIndex: 'date'
  },
  {
    title: 'Ghi chú',
    dataIndex: 'note'
  },
];

const data1 = [];
for (let i = 0; i < 4; i++) {
  data1.push({
    key: i,
    stt: i,
    codeRequest: `0000${i}`,
    personRequest: `Person ${i}`,
    address: `09123xxx ${i}`,
    reason: `Adress ${i}`,
  });
}


const data2 = [];
for (let i = 0; i < 4; i++) {
  data2.push({
    key: i,
    stt: i,
    codeRequest: `0000${i}`,
    personRequest: `Person ${i}`,
    address: `09123xxx ${i}`,
    reason: `Adress ${i}`,
    date: `date${1}`,
    note: `note${1}`,
  });
}
const TableComponentCustorm = (props) => {
    const {columns, dataSource} = props;
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
      setLoading(true);
      // ajax request after empty completing
      setTimeout(() => {
        setSelectedRowKeys([]);
        setLoading(false);
      }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
  
    return (
      <div>
        <div
          style={{
            marginBottom: 16,
          }}
        >
          <span
            style={{
              marginLeft: 8,
            }}
          >
          </span>
        </div>
        <Table columns={columns} dataSource={dataSource} bordered/>
      </div>
    );
}

export default TableComponentCustorm