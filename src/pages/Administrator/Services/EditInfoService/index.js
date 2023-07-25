import React from 'react'
import SearchComponent from '../components/SearchComponent'
import { Divider } from 'antd'
import TitleComponent from '../../../../components/TitleComponent'
import ListButton from '../components/ListButton'
import TableContent from '../components/TableContent'

const EditInfoService = () => {
    return (
        <>
            <SearchComponent />
            <Divider />
            <TitleComponent title={'Điều chỉnh thông tin khách hàng'}>
                <ListButton />
            </TitleComponent>
            <TableContent type='2' />
        </>
    )
}

export default EditInfoService