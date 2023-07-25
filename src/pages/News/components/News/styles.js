import React from "react";
import styled from 'styled-components'
import { Typography } from 'antd';
import { themeStyles } from "../GlobalStyles"; 
const { Title } = Typography;

export const Wrapper = styled.div`
padding: 60px 0 80px 0;
`
export const WrapperContent = styled.div`
padding-top: 30px;
`
export const WrapperItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const WrapperPagination = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    .ant-pagination-item{
        background-color: transparent;
        border-radius: 6px;
        border: 1px solid  #E9EBEC;
        box-shadow: 0px 1px 3px 0px rgba(0, 81, 139, 0.15);
        color:#6A7688 !important;
    }
    .ant-pagination-prev, .ant-pagination-next{
        background-color: transparent;
        border-radius: 6px;
        border: 1px solid  #E9EBEC;
        box-shadow: 0px 1px 3px 0px rgba(0, 81, 139, 0.15);
    }
    .ant-pagination-item-active{
        background-color: ${themeStyles.mainColor};
        a{
            color: #fff;
        }
    }
`
export const TitleStyled = styled(Title)`
    position: relative;
    color: ${themeStyles.mainColor} !important;
    font-size: ${themeStyles.font22} !important;
    font-weight: 600;
    padding-bottom: 20px;
    border-bottom: 1px solid #DDDDDD;
`
