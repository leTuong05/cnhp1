import React from 'react'
import SearchComponent from '../components/SearchComponent'
import { Divider } from 'antd'
import TitleComponent from '../../../../components/TitleComponent'
import ListButton from '../components/ListButton'
import TableContent from '../components/TableContent'
import { useState } from 'react'

const ContractNameService = () => {
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
            <TitleComponent title={'Sang tên hợp đồng DVCN'}>
                <ListButton
                    id={selectedRowKeys}
                    listTicket={listTicket}
                    setListTicket={handleSetListTicket}
                    type={3}
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
                type={3}
            />

        </>
    )
}

export default ContractNameService