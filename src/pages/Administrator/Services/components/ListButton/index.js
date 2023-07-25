import React from 'react'
import { Wrapper } from './styles'
import { Button } from 'antd'

const ListButton = () => {
    return (
        <Wrapper>
            <Button disabled>Tiếp nhận</Button>
            <Button disabled>Hoàn thành</Button>
        </Wrapper>
    )
}

export default ListButton