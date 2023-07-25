import React,{useState} from 'react'
import SearchComponent from '../components/SearchComponent'
import { Divider } from 'antd'
import TitleComponent from '../../../../components/TitleComponent'
import ListButton from '../components/ListButton'
import TableContent from '../components/TableContent'

const RepairService = () => {
    const [searchData, setSearchData] = useState(null);
    const handleSearchData = (data) => {
        setSearchData(data);
    };
    console.log(searchData);
    return (
        <>
            <SearchComponent onSearchData={handleSearchData} />
            <Divider />
            <TitleComponent title={'Sửa chữa (đồng hồ, mạng lưới cấp nước sau đồng hồ)'}>
                <ListButton />
            </TitleComponent>
            <TableContent searchData={searchData} type={6} />
        </>
    )
}

export default RepairService