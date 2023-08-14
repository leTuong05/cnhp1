import { Modal } from "antd";
import { styled } from "styled-components";


export const ModalStyled = styled(Modal)`
    .ant-btn-primary{
        background: linear-gradient(90deg,#154398,#ed1117)!important;
        border-color: #fff!important;
        color: #fff!important;
    }
    .ant-form-item{
        margin-bottom: 0 !important;
    }
    .ant-input::placeholder::before,
    textarea::placeholder::before {
    content: '*';
    color: red;
    margin-right: 4px; /* Adjust the spacing between the asterisk and the placeholder text */
}
`