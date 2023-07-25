import styled, { css } from 'styled-components';
import { colors, customTitle } from '../../styles';

//---------------------CUSTOM ------------------------//

//---------------------STYLE COMPONENT ------------------------//

export const PolicyGeneralStyled = styled.div`
    .title {
        ${customTitle}
        &::after {
            content: none;
        }
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
        padding: 0;
    }
    .ant-collapse-header-text {
        ${customTitle};
        font-size: 18px;
        margin: 0;
        &::after {
            margin-top: 10px;
        }
    }

    .ant-collapse-ghost > .ant-collapse-item > .ant-collapse-content {
        font-size: 14px;
        font-weight: 400;
        border: 1px solid var(--border, #ddd);
        padding: 20px;
    }
    .ant-collapse-item {
        padding-top: 30px;
        border-bottom: 1px solid #ebebeb;
        .ant-collapse-header .ant-collapse-arrow {
            color: ${colors.primary};
            transform: rotate(270deg);
        }
    }
    .ant-collapse-item-active {
        .ant-collapse-header .ant-collapse-arrow {
            color: ${colors.secondary};
            transform: rotate(0deg);
        }
    }
    .ant-collapse-ghost > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
        padding: 0;
    }
`;

export const WaterPriceStyled = styled.div`
    .title {
        ${customTitle}
        &::after {
            margin-top: 13px;
        }
    }
    .container-content {
        border: 1px solid var(--border, #ddd);
        padding: 30px;
        margin-bottom: 30px;
    }
    .water-price-text-red {
        font-size: 14px;
        font-weight: 600;
        color: ${colors.secondary};
        text-align: center;
        padding-bottom: 20px;
    }
    .water-price-text-title {
        font-size: 20px;
        font-weight: 600;
        color: ${colors.primary};
        text-align: center;
        padding-bottom: 30px;
    }
    .water-price-policy {
        display: flex;
        justify-content: space-between;
        padding-bottom: 30px;
        .sub-text {
            color: ${colors.grown};
        }
    }
    .ant-table-thead {
        .ant-table-cell {
            background: ${colors.green};
            text-align: center;
            color: ${colors.white};
        }
    }
    .ant-table-wrapper .ant-table-container table > thead > tr:first-child {
        & > *:first-child,
        & > *:last-child {
            border-radius: 0;
        }
    }
    .serial {
        text-align: center;
    }
    .price {
        text-align: end;
    }

    .water-price-purpose {
        padding-bottom: 30px;
        .purpose-title {
            font-size: 14px;
            font-weight: 700;
            padding-bottom: 20px;
        }
    }
    .sub-text-end {
        color: ${colors.grown};
        margin-bottom: 60px;
    }
`;

export const SearchSerialStyled = styled.div`
    input {
        height: 42px;
    }
    .ant-picker {
        width: 100%;
        height: 42px;
    }
    button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 42px;
    }

    .container {
        align-items: end;
    }
`;

export const SuspendScheduleStyled = styled.div``;

export const InvoiceToolStyled = styled.div``;
