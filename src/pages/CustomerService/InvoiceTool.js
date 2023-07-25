import React from 'react';
import SearchSerial from './components/SearchSerial';
import CustomTabs from '../../components/Tabs';
import { InvoiceToolStyled } from './styles';
import Living from './components/Living';
const InvoiceTool = () => {
    const items = [
        {
            key: '1',
            label: `Sinh hoạt`,
            children: <Living />
        },
        {
            key: '2',
            label: `Ngoài sinh hoạt`,
            children: <Living />
        },
        {
            key: '3',
            label: `Bán buôn`,
            children: <Living />
        }
    ];
    return (
        <InvoiceToolStyled>
            <CustomTabs items={items} title={'Công cụ tính hóa đơn tiền nước'} />
        </InvoiceToolStyled>
    );
};

export default InvoiceTool;
