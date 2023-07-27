import React from 'react'
import SearchComponent from '../components/SearchComponent'
import { Divider } from 'antd'
import TitleComponent from '../../../../components/TitleComponent'
import ListButton from '../components/ListButton'
import TableContent from '../components/TableContent'
import { useState } from 'react'

const RepairService = () => {
    const [searchData, setSearchData] = useState("");
    const [searchDate, setSearchDate] = useState("");
    const [searchStatus, setSearchStatus] = useState(0)
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [listTicket, setListTicket] = useState([]);

    const handleSetListTicket = (newListTicket) => {
        setListTicket(newListTicket);
    };
    const handleSearchData = (data) => {
        setSearchData(data);
    };
    const handleSearchDate = (data) => {
        setSearchDate(data);
    };
    const handleSearchStatus = (data) => {
        setSearchStatus(data);
    };
    return (
        <>
            <SearchComponent
                onSearchData={handleSearchData}
                onSearchDate={handleSearchDate}
                onSearchStatus={handleSearchStatus}
            />
            <Divider />
            <TitleComponent title={'Sửa chữa (ĐH, mạng lưới cấp nước sau đồng hồ)'}>
                <ListButton
                    id={selectedRowKeys}
                    listTicket={listTicket}
                    setListTicket={handleSetListTicket}
                    type={6}
                />
            </TitleComponent>
            <TableContent
                listTicket={listTicket}
                setListTicket={handleSetListTicket}
                selected={selectedRowKeys}
                setSelected={setSelectedRowKeys}
                searchData={searchData}
                searchDate={searchDate}
                searchStatus={searchStatus}
                type={6}
            />

        </>
    )
}

export default RepairService