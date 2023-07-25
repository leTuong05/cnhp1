import React from 'react'
import SearchComponent from '../components/SearchComponent'
import { Divider } from 'antd'
import TitleComponent from '../../../../components/TitleComponent'
import ListButton from '../components/ListButton'
import TableContent from '../components/TableContent'

const ContractNameService = () => {
    return (
        <>
            <SearchComponent />
            <Divider />
            <TitleComponent title={'Sang tên hợp đồng DVCN'}>
                <ListButton />
            </TitleComponent>
            <TableContent type={3} />
        </>
    )
}

export default ContractNameService