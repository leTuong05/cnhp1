import React, { useEffect, useState } from 'react'
import { TableStyled } from './styles'
import OrderDetail from '../../../Order/components/OrderDetail';
import TicketDetail from '../TicketDetail';
import { GetListTicket } from '../../../../../services/apis/Service';
import moment from 'moment';

const columns = [
    {
        title: 'STT',
        dataIndex: 'key',
        key: 'stt',
        render: (_, __, index) => index + 1
    },
    {
        title: 'Mã khách hàng',
        dataIndex: 'CustomerCode',
        key: 'CustomerCode',
    },
    {
        title: 'Người yêu cầu',
        dataIndex: 'Fullname',
        key: 'Fullname',
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
        key: '',
        render: (_, record) => (
            <div>
                <span>{record.PhoneNumber}</span>
                <br />
                <span className='italic'>{record.AddressUseWater}</span>
            </div>
        ),
    },
    {
        title: 'Ngày yêu cầu',
        dataIndex: 'CreateDate',
        key: 'CreateDate',
        render: (date) => moment(date).format('DD/MM/YYYY HH:mm'),
    },
    {
        title: 'Trạng thái',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, record) => (

            <div>
                {record.TicketStatus === 3 ? (
                    <span className='item-blue'>Hoàn thành</span>
                ) : record.TicketStatus === 2 ? (
                    <span className='item-orange'>Đang hỗ trợ</span>
                ) : record.TicketStatus === 1 ? (
                    <span className='item-green'>Mới</span>
                ) : null}
            </div>

        ),
    },

];
const data = [
    {
        key: 1,
        Address: "Mễ Trì Hạ, Nam Từ Liêm, Hà Nội",
        FullName: "Quản trị",
        PhoneNumber: "0358120912",
        RequestDate: "2022-11-29T15:04:40+07:00",
        TicketListID: "ce97599a-acf7-435a-9a51-33c1dad5e192",
        TicketStatus: 3,
        TicketType: 1,
        UserCode: "ADMIN",
    },
    {
        key: 2,
        Address: "hà đông",
        FullName: "Nguyễn văn A",
        PhoneNumber: "0963049748",
        RequestDate: "2022-11-25T13:06:47+07:00",
        TicketListID: "c9cb9333-d123-416f-a6f0-ecea106eaa8a",
        TicketStatus: 3,
        TicketType: 1,
        UserCode: "PD091296",
    }
]
const TableContent = ({ type }) => {
    const [showDetailTicket, setShowDetailTicket] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [listTicket, setListTicket] = useState([]);
    const [idTicket, setIdTicket] = useState();
    const [customerCode, setCustomerCode] = useState('')
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleRowClick = (record, id) => {

        setIdTicket(record.TicketListID)
        // Handle row click event
        setShowDetailTicket(true)

    };
    const handleHide = () => {
        setShowDetailTicket(false)
    };

    useEffect(() => {
        const getListTicket = async () => {
            const response = await GetListTicket({
                PageSize: 50,
                CurrentPage: 1,
                TextSearch: "",
                Date: "",
                TicketType: type || 0
            })
            setListTicket(response.Object)
        }
        getListTicket();
    }, [type])
    return (
        <>
            <TableStyled
                rowSelection={rowSelection}
                columns={columns}
                dataSource={listTicket}
                bordered
                onRow={(record) => ({
                    onClick: () => handleRowClick(record, record.orderID),
                })}
            />

            {showDetailTicket && (
                <TicketDetail
                    id={idTicket}
                    visible={showDetailTicket}
                    onCancel={handleHide}
                />
            )}
        </>
    )
}

export default TableContent