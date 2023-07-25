import { Typography } from 'antd';
import { styled } from 'styled-components'

export const Title = styled(Typography)`
    font-size: 24px;
    color: #154398;
    font-weight: 600;
    line-height: 120%; /* 28.8px */
    padding-bottom: 20px;
    border-bottom:1px solid #DDD;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
export const Line = styled.div`
    position: absolute;
    bottom: 0;
    background: linear-gradient(90deg, #154297 0%, #ED1E24 100%);
    height: 4px;
    width: 80px;
`