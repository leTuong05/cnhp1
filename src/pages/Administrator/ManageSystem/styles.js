import styled, { css } from 'styled-components';
import { colors, customTitle } from '../../../styles';

export const ManageSystemStyled = styled.div`
    & > .ant-divider-horizontal {
        margin-top: 0;
    }
    .head-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            ${customTitle}
            &::after {
                margin-top: 20px;
            }
        }
    }
`;
