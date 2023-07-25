
import React, { useState } from 'react';
import { Button, Table } from 'antd';
const columns = [
  {
    title: 'STT',
    dataIndex: 'stt'
  },
  {
    title: 'Mã yêu cầu',
    dataIndex: 'codeRequest'
  },
  {
    title: 'Người yêu cầu',
    dataIndex: 'personRequest'
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address'
  },
  {
    title: 'Lý do',
    dataIndex: 'reason'
  },
];

const data = [];
for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    // name: `Edward King ${i}`,
    // age: 32,
    // address: `London, Park Lane no. ${i}`,
    stt: i,
    codeRequest: `0000${i}`,
    personRequest: `Person ${i}`,
    address: `Adress ${i}`,
    reason: `Quán hạn ${i}`,
  });
}

const TableComponent = (props) => {
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
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered/>
    </div>
  );
}

export default TableComponent