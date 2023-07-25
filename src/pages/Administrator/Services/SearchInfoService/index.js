import React from 'react'
import SearchComponent from '../components/SearchComponent'
import { Divider } from 'antd'
import TitleComponent from '../../../../components/TitleComponent'
import ListButton from '../components/ListButton'
import TableContent from '../components/TableContent'

const SearchInfoService = () => {
    return (
        <>
            <SearchComponent />
            <Divider />
            <TitleComponent title={'Tra cứu sử dụng nước'}>
                <ListButton />
            </TitleComponent>
            <TableContent type='2' />
        </>
    )
}

export default SearchInfoService