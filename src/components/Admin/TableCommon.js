import React, { useEffect, useState } from 'react';
import { Card, Row, Space } from 'antd';
import { Button, Table } from 'antd';
import { ButtonAddUnits, Wapper, WapperTable } from '../Style/style';
import { Modal } from 'antd';
import ModalAddUnits from '../../pages/Administrator/Units/ModalAddUnits';
import SearchStatus from '../../pages/Administrator/Units/SearchStatus';
import { useSelector, useDispatch } from 'react-redux'
import { fetchDeteleManageTeam, fetchgetList } from '../../reducers/managementTeamSlice';

import {EditOutlined, DeleteOutlined} from '@ant-design/icons'

const data = [];
for (let i = 0; i < 9; i++) {
  data.push({
    // key: i,
    stt: i,
    account: `account${i}`,
    maToQuanLy: `maToQuanLy ${i}`,
    tenToQuanLy: `tenToQuanLy ${i}`,
    sdt: `sdt ${i}`,
    address: `address ${i}`,
    khuVuc: `khuVuc ${i}`,
    nv: `nv ${i}`,
    status: `status ${i}`,
  });
}

const TableCommon = (props) => {
  const {title} = props
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [isVisible, setIsVisiable] = useState(false)

  const [valueIDDelete, setValuIDDelete] = useState('')

  const dispatch = useDispatch();

  const columnsToQuanLy = [
    {
      title: 'STT',
      dataIndex: 'stt',
      render: (_, __, index) => index + 1
    },
    {
      title: 'Tài khoản',
      dataIndex: 'UserName'
    },
    {
      title: 'Mã tổ quản lý',
      dataIndex: 'ManagementTeamCode'
    },
    {
      title: 'Tên tổ quản lý',
      dataIndex: 'ManagementTeamName'
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'PhoneNumber'
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'Address'
    },
    {
      title: 'Khu vực quản lý',
      dataIndex: 'RegionName'
    },
    {
      title: 'Nhân viên',
      dataIndex: 'nv'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'ManagementTeamStatus',
      render : (text,record) => (
        <Space>
          <Button type="default" icon={<EditOutlined />} onClick={() => handleEdit(record)}></Button>
          <Button type="default" icon={<DeleteOutlined />} onClick={() => handleDelete(record)}></Button>
        </Space>
      )
    },
  ];

  const [valueRecord, setValueRecord] = useState(null)

  const handleEdit = (record) => {
    setSelectedRow(record);
    handleShowModal();
  }

  useEffect(() => {
    setSelectedRow(valueRecord);
  }, [valueRecord])

  //DELETE
  // setValuIDDelete(record.ManagementTeamID);
  const handleDelete = (record) => {
    console.log(record.ManagementTeamID);
    Modal.confirm({
      title: 'Xóa',
      content: 'Bạn chắc chắn muốn xóa tổ quản lý này không?',
      onOk: () => {
        dispatch(fetchDeteleManageTeam(record.ManagementTeamID))
      },
    });
    getList();
  }

  const listManage = useSelector((state) => state?.manage?.listMagagementTeam?.listAllStatus?.Object)
  // console.log(listManage);

  const getList = () => {
    dispatch(fetchgetList(
      {
        "PageSize": 20,
        "CurrentPage": 1,
        "TextSearch": "",
        "ManagementTeamStatus": "",
        "ProvinceID": "",
        "DistrictID": "",
        "WardID": ""
      }
    ))
  }

  useEffect(() => {
    getList()
  }, [])

  const handleShowModal = () => {
    setIsVisiable(true);
  };
  const handleHideModal = () => {
    setIsVisiable(false);
    // setSelectedRow(null);
  };

  const isShowModal = () => {
    setIsVisiable(true)
  }
  
  const showModal = () => {
    setIsVisiable(true)
  }
  
  const start = () => {
    setLoading(true);
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
    <>
      <SearchStatus />
      <Wapper>
          <Card
            title={title}
            bordered={false}
            style={{
              width: '100%',
            }}
          >
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
              <WapperTable columns={columnsToQuanLy} dataSource={listManage} bordered/>
          </div>
          </Card>

          <ButtonAddUnits type="primary" style={{background: 'var(--btn-primary-color)'}} onClick={handleShowModal}>
              Thêm tổ quản lý
          </ButtonAddUnits>
          
          <ModalAddUnits 
            title="Thêm tổ quản lý"
            handlehideModal={handleHideModal}
            isModalVisiable={isVisible}
            selectedRow={selectedRow}
          />
      </Wapper>
    </>
  )
}

export default TableCommon