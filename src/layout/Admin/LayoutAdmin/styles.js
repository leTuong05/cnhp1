import { Breadcrumb, Menu } from "antd";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    .custom-width{
        width: 100% !important;

    }
    
    footer{
        display: none;
    }
`
export const BreadcrumbStyled = styled(Breadcrumb)`

`
export const WrapperContent = styled.div`
    padding: 10px;
    margin-top: 20px;
`
export const MenuStyled = styled(Menu)`
    background-color: rgb(247, 247, 247);
    min-height: calc(100vh - 90px);
    max-height: calc(100vh - 90px);
    width: 100% !important;
    padding: 20px ;
    border-radius: 8px;
    overflow:hidden auto;
    .ant-menu-title-content{
        font-size: 14px;
        font-weight: 600;
        
    }
    .ant-menu-item-only-child{
        color: black;
    }
    .ant-menu-item-only-child>.ant-menu-title-content{
        font-weight: 400;
    }
    .ant-menu-item-selected{
        background-color: #fff;
        color: #154398;
    }
    .ant-menu-inline{
        background: transparent !important;
    }
    .ant-menu-submenu-selected{
        color: #154398;
    }
    .ant-menu-submenu-title{
        color: black !important;
    }
    
`