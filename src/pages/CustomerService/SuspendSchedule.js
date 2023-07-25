import CustomTabs from '../../components/Tabs';
import React from 'react';
import SearchSerial from './components/SearchSerial';
import { SuspendScheduleStyled } from './styles';

const SuspendSchedule = () => {
    const items = [
        {
            key: '1',
            label: `Tìm kiếm theo mã khách hàng`,
            children: <SearchSerial />
        },
        {
            key: '2',
            label: `Tìm kiếm theo khu vực`,
            children: <SearchSerial />
        }
    ];
    return (
        <SuspendScheduleStyled>
            <CustomTabs items={items} title={'Lịch tạm ngừng cấp nước'} />
        </SuspendScheduleStyled>
    );
};

export default SuspendSchedule;
