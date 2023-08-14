import React, { useEffect, useMemo, useState } from 'react'
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

const TableContent = ({ type, searchData, searchDate, searchStatus, selected, setSelected, listTicket, setListTicket }) => {
    const [showDetailTicket, setShowDetailTicket] = useState(false);
    // const [listTicket, setListTicket] = useState([]);
    const [idTicket, setIdTicket] = useState();


    const onSelectChange = (selectedRowKeys) => {
        setSelected(selectedRowKeys);
    };

    const rowSelection = ({
        selected,
        onChange: onSelectChange,
    })


    const handleRowClick = (record, id) => {
        setIdTicket(record.TicketListID)
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
                TextSearch: searchData || "",
                Date: searchDate || "",
                TicketStatus: searchStatus === 0 ? "" : searchStatus,
                TicketType: type || 0
            })
            if (response) {
                setListTicket(response?.Object)
            }else{
                setListTicket([])
            }

        }
        getListTicket();
    }, [type, searchData, searchDate, searchStatus])
    return (
        <>
            <TableStyled
                rowKey="TicketListID"
                rowSelection={rowSelection}
                columns={columns}
                dataSource={listTicket}
                bordered
                scroll={{ y: 600 }}
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