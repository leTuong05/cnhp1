import React from 'react'
import SearchComponent from '../components/SearchComponent'
import { Divider } from 'antd'
import TitleComponent from '../../../../components/TitleComponent'
import ListButton from '../components/ListButton'
import TableContent from '../components/TableContent'

const PaymentService = () => {
    return (
        <>
            <SearchComponent />
            <Divider />
            <TitleComponent title={'Đăng ký thanh toán tiền nước'}>
                <ListButton />
            </TitleComponent>
            <TableContent type='2' />
        </>
    )
}

export default PaymentService