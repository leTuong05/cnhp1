import React from 'react'
import SearchComponent from '../components/SearchComponent'
import { Divider } from 'antd'
import TitleComponent from '../../../../components/TitleComponent'
import ListButton from '../components/ListButton'
import TableContent from '../components/TableContent'

const ContractRenewalService = () => {
    return (
        <>
            <SearchComponent />
            <Divider />
            <TitleComponent title={'Cấp lại hợp đồng DVCN'}>
                <ListButton />
            </TitleComponent>
            <TableContent type={4} />
        </>
    )
}

export default ContractRenewalService