import React from 'react';
import { Space, Table, Tag } from 'antd';
import { TableStyled } from './styles';
import { GetListWaterBill } from '../../../../../services/apis/GetListWaterBill';
import { useEffect } from 'react';
import { useState } from 'react';
const columns = [
    {
        title: 'STT',
        dataIndex: 'index',
        key: 'index',
        width: 60,
    },
    {
        title: 'Mã hoá đơn',
        dataIndex: 'BillCode',
        key: 'BillCode',
    },
    {
        title: (
            <div className='title'>
                <span>Mã khách hàng</span>
                <br />
                <span className='italic'>Tên khách hàng</span>
            </div>
        ),
        dataIndex: '',
        width: 200,
        key: 'name',
        render: (_, record) => (
            <div>
                <span>{record.UserCode}</span>
                <br />
                <span className='italic'>{record.FullName}</span>
            </div>
        ),
    },
    {
        title: (
            <div className='title'>
                <span>Số điện thoại</span>
                <br />
                <span className='italic'>Địa chỉ</span>
            </div>
        ),
        dataIndex: '',
        width: 200,
        key: '',
        render: (_, record) => (
            <div>
                <span>{record.PhoneNumber}</span>
                <br />
                <span className='italic'>{record.Address}</span>
            </div>
        ),
    },
    {
        title: (
            <div className='title'>
                <span >Chỉ số mới</span>
                <br />
                <span className='italic'>Chỉ số cũ</span>
            </div>
        ),
        dataIndex: '',
        key: '',
        render: (_, record) => (
            <div>
                <span>{record.NewIndex}</span>
                <br />
                <span className='italic'>{record.OldIndex}</span>
            </div>
        ),
    },

    {
        title: 'Tiêu thụ',
        dataIndex: 'Consume',
        key: 'Consume',

    },
    {
        title: 'Số tiền',
        dataIndex: 'PayAmount',
        key: 'PayAmount',
    },
    {
        title: 'Trạng thái',
        key: 'BillStatus',
        dataIndex: '',
        width: 200,
        render: (_, record) => (

            <div>
                {record.status === 'dang-thu' ? (
                    <span className='item-blue'>Đang thu</span>
                ) : record.BillStatus === 1 ? (
                    <span className='item-orange'>{record.BillStatusName}</span>
                ) : record.status === 'da-thanh-toan' ? (
                    <span className='item-green'>Đã thanh toán</span>
                ) : record.status === 'qua-han' ? (
                    <span className='item-red'>Quá hạn nộp</span>
                ) : null}
            </div>

        ),
    },

];

const ListBill = ({ RegionId, TextSearch, Status, Month, Year }) => {
    const [listBill, setListBill] = useState([])

    const dataWithSTT = listBill.map((item, index) => ({
        ...item,
        index: index + 1, // Tính toán giá trị STT bằng cách thêm 1 vào index
    }));

    
    // useEffect(() => {

    //     const getListLocation = async () => {
    //         const response = await GetListWaterBill({
    //             "TextSearch": TextSearch || "",
    //             "PageSize": 20,
    //             "CurrentPage": 1,
    //             "Month": 1,
    //             "Year": 2222,
    //             "Status": Status || 0,
    //             "RegionID": RegionId || 4050
    //         });
    //         setListBill(response.Object.data);
    //         console.log(response.Object.data);
    //     }
    //     getListLocation();

    // }, [RegionId, TextSearch, Status])

    return (
        <TableStyled
            columns={columns}
            dataSource={dataWithSTT}
            bordered
            scroll={{ y: 600 }}
        />
    );
}
export default ListBill;