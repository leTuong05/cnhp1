import { styled } from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    gap: 20px;

    .ant-btn{
        background: linear-gradient(90deg,#154398,#ed1117)!important;
        border-color: #fff!important;
        color: #fff!important;
        height: 42px!important;
        padding: 0 30px;
        min-width: 84px;
    }
    .ant-btn-default:disabled{
        opacity: .7;
    }
`