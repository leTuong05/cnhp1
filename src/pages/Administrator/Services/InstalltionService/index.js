import React from 'react'

import SearchComponent from '../components/SearchComponent'
import { Button, Divider, Tabs } from 'antd'
import { TabStyled } from './styles';
import TableContent from '../components/TableContent';
import TabPane from 'antd/es/tabs/TabPane';
import ListButton from '../components/ListButton';
import { useState } from 'react';


const InstalltionService = () => {
    const [ticketType, setTicketType] = useState(1)
    const handleTabChange = (activeKey) => {
        // Update ticketType based on the active tab key
        if (activeKey === '1') {
            setTicketType(1);
        } else {
            setTicketType(2);
        }

        
    };
    console.log(ticketType);
    const items = [
        {
            key: '1',
            label: `Yêu cầu lắp đặt`,
            children: <TableContent type={ticketType} />,
        },
        {
            key: '2',
            label: `Yêu cầu di chuyển`,
            children: <TableContent type={ticketType} />,
        },

    ];
    return (
        <>
            <SearchComponent />
            <Divider />
            <TabStyled defaultActiveKey="1" onChange={handleTabChange} tabBarExtraContent={<ListButton />}>
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