import styled, { css } from 'styled-components';
import { colors, customTitle } from '../../../styles';

export const ProductsStyled = styled.div`
    .ant-tabs {
        .ant-tabs-tab {
            padding: 13px 19px;
            font-size: 18px;
            font-weight: 600;
        }
        .ant-tabs-tab-active {
            background: #f8f8f8;
        }
        .ant-tabs-tab + .ant-tabs-tab {
            margin: 0;
        }
    }
    .upload-form {
        display: flex;
    }
    .group-btn {
        display: flex;
        .ant-btn {
            padding: 20px 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-weight: 600;
        }
        .ant-btn + .ant-btn {
            margin-left: 20px;
        }
    }
    .ant-table-cell img {
        margin-right: 10px;
    }
`;
