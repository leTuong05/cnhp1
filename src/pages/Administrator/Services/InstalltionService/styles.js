import { Tabs } from "antd";
import { styled } from "styled-components";

export const TabStyled = styled(Tabs)`
    .ant-tabs-tab{
        padding: 15px 25px;
        margin: 0px;
        
    }
    
    .ant-tabs-tab-active{
        background: rgb(248, 248, 248);
        border-bottom: 3px solid!important;
        border-image-slice: 1;
        border-image-source: linear-gradient(90deg, #154297 0%, #ED1E24 100%)!important;
        
        z-index: 2;
    }
    .ant-tabs-tab-active .ant-tabs-tab-btn{
        color: #ED1117 !important;
    }
    .ant-tabs-tab-btn{
        color: #154398;
        font-size: 18px;
        font-weight: 600;
    }
`