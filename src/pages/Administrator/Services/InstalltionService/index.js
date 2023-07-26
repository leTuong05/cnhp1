import React from 'react'

import SearchComponent from '../components/SearchComponent'
import { Button, Divider, Tabs } from 'antd'
import { TabStyled } from './styles';
import TableContent from '../components/TableContent';
import TabPane from 'antd/es/tabs/TabPane';
import ListButton from '../components/ListButton';
import { useState } from 'react';


const InstalltionService = () => {
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
console.log(searchStatus);
    const [ticketType, setTicketType] = useState(1)
    const handleTabChange = (activeKey) => {
        // Update ticketType based on the active tab key
        if (activeKey === '1') {
            setTicketType(1);
        } else {
            setTicketType(2);
        }
    };

    const items = [
        {
            key: '1',
            label: `Yêu cầu lắp đặt`,
            children: <TableContent
                listTicket={listTicket}
                setListTicket={handleSetListTicket}
                selected={selectedRowKeys}
                setSelected={setSelectedRowKeys}
                searchData={searchData}
                searchDate={searchDate}
                searchStatus={searchStatus}
                type={ticketType}
            />,
        },
        {
            key: '2',
            label: `Yêu cầu di chuyển`,
            children: <TableContent
                listTicket={listTicket}
                setListTicket={handleSetListTicket}
                selected={selectedRowKeys}
                setSelected={setSelectedRowKeys}
                searchData={searchData}
                searchDate={searchDate}
                searchStatus={searchStatus}
                type={ticketType}
            />,
        },

    ];
    return (
        <>
            <SearchComponent
                onSearchData={handleSearchData}
                onSearchDate={handleSearchDate}
                onSearchStatus={handleSearchStatus}
            />
            <Divider />
            <TabStyled
                defaultActiveKey="1"
                onChange={handleTabChange}
                tabBarExtraContent={
                    <ListButton
                        id={selectedRowKeys}
                        listTicket={listTicket}
                        setListTicket={handleSetListTicket}
                        type={ticketType}
                    />
                }
            >
                {items.map((item) => (
                    <TabPane tab={item.label} key={item.key}>
                        {item.children}
                    </TabPane>
                ))}
            </TabStyled>
        </>
    )
}

export default InstalltionService