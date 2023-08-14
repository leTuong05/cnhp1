import { Modal } from "antd";
import { styled } from "styled-components";

export const ModalStyled = styled(Modal)`
    .ant-modal-content{
        gap: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
    .text-confirm{
        font-size: 16px;
        font-weight: 600!important;
        color: #222d4b;
    }
    .ant-btn{
        height: 37px!important;
    }
    .ant-btn-primary{
        align-items: center;
        border-radius: 6px!important;
        font-weight: 500;
        
        background: #fff!important;
        border-color: #154398!important;
        color: #154398!important;
    }
    .ant-btn-default{
        min-width: 84px;
        background: #154398!important;
        border-color: #154398!important;
        color: #fff!important;
    }
    .icon{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
`