import React from 'react'
import { Line, Title } from './styles'

const TitleComponent = ({title, children}) => {
    return (
        <Title>
            {title}
            {children}
            <Line />
        </Title>
    )
}

export default TitleComponent