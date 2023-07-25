import styled, { css } from 'styled-components';
import { colors, customTitle } from '../../styles';
//---------------------CUSTOM CSS ------------------------//

export const customDot = css`
    content: '•';
    color: ${colors.yellow};
    font-weight: 700;
    display: inline-block;
    width: 1em;
    margin-left: 0em;
    font-size: 20px;
    line-height: 1;
`;

//---------------------STYLE COMPONENT ------------------------//

export const ContactStyled = styled.div`
    .contact-title {
        ${customTitle};

        margin-bottom: 46px;
    }
    .card-title {
        font-size: 22px;
        font-weight: 600;
        color: ${colors.primary};
        margin-bottom: 8px;
        &:before {
            ${customDot};
        }
    }
    .ant-card {
        padding-top: 3px;
        border-radius: 8px;
        margin-bottom: 30px;
        box-shadow: 0px 0px 20px 0px rgba(21, 67, 152, 0.1);

        &.contact-address,
        &.contact-email {
            background: ${colors.green};
        }
        &.contact-hotline {
            background: ${colors.blue};
        }
        &.contact-social {
            background: ${colors.yellow};
        }
    }
    .ant-card-body {
        border-radius: 3px;
        background: ${colors.white};
    }
    .card-text {
        font-size: 16px;
        font-weight: 600;
        color: #212529;
    }
    .ant-row {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        .ant-col {
            padding: 0 12px;
        }
    }
    .card-hotline {
        font-size: 28px;
        font-weight: 600;
        color: ${colors.secondary};
    }
    .social-item {
        justify-content: flex-start;
    }
`;

export const CompanyInfoStyled = styled.div`
    .contact-title {
        ${customTitle};

        margin-bottom: 46px;
    }
    .ant-card-head {
        background: rgb(21, 67, 152);
        border-radius: 4px 4px 0px 0px;
        padding: 20px 15px;
        color: rgb(255, 255, 255);
        font-weight: 600;
    }
    .card-left,
    .card-right {
        padding: 0 10px;
    }
    .card-left {
        font-weight: 600;
        color: rgb(0, 0, 0);
    }
    .card-right {
        color: rgb(0, 0, 0);
    }
    .ant-card-body {
        padding: 30px;
    }
    .card-content {
        row-gap: 20px;
    }

    .ant-card {
        box-shadow: rgba(21, 67, 152, 0.1) 0px 0px 20px;
        &:last-child {
            margin-top: 24px;
        }
    }
    .ant-select {
        width: 100%;
    }
    .ant-select-selection-placeholder {
        color: ${colors.white};
        font-size: 14px;
        font-weight: 600;
    }
    .ant-select-selector {
        height: 50px !important;
        padding: 7px 11px !important;
        background-color: rgb(21, 67, 152) !important;
    }
    .ant-select-arrow {
        color: ${colors.white};
    }
`;

export const FormContactStyled = styled.div`
    box-shadow: 0px 0px 20px 0px rgba(21, 67, 152, 0.1);
    border-radius: 4px;
    padding: 30px;
    .ant-form-item-required {
        font-size: 14px;
        font-weight: 600;
    }
    .form-upload {
        color: ${colors.primary};
        font-weight: 600;
        text-decoration-line: underline;
    }
    .form-submit {
        padding: 25px 100px;
        height: 56px;
        border-radius: 4px;
        background: linear-gradient(90deg, #154398 0%, #ed1117 100%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const MapStyled = styled.iframe`
    width: 100%;
    height: 400px;
    margin-bottom: 60px;
`;

export const ContactContainerStyled = styled.div`
    .title {
        ${customTitle};
        &:after {
            margin-top: 15px;
        }
    }
`;
