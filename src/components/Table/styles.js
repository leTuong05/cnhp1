import styled, { css } from 'styled-components';
import { colors, customTitle } from '../../styles';
import { Table } from 'antd';

export const TableStyled = styled(Table)`
    .ant-table-thead {
        .ant-table-cell {
            background: ${colors.primary};
            text-align: center;
            color: ${colors.white};
            &:hover {
                background: ${colors.primary} !important;
                &::before {
                    background-color: #f0f0f0 !important;
                }
            }
            &:last-child {
                position: relative;
            }
        }
    }
    .serial {
        display: flex;
        justify-content: center;
    }
    .action {
        display: flex;
        justify-content: space-between;
    }
    .edit {
        position: absolute;
        top: 10px;
        right: 0;
    }
    .icon {
        border-radius: 100%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon-edit {
        background: ${colors.lightGreen};
        color: ${colors.green};
    }
    .icon-delete {
        background: ${colors.lightRed};
        color: ${colors.secondary};
    }
`;
