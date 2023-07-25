import styled, { css } from 'styled-components';
import { colors, customTitle } from '../../styles';

export const TabStyled = styled.div`
    .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: ${colors.secondary};
    }
    .ant-tabs .ant-tabs-ink-bar {
        background: linear-gradient(90deg, #154297 0%, #ed1e24 100%);
        height: 3px;
    }
    .title {
        ${customTitle}
        margin-bottom: 50px;
        &::after {
            content: none;
        }
    }
`;
