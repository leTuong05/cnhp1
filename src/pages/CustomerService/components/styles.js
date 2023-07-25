import styled, { css } from 'styled-components';
import { colors, customTitle } from '../../../styles';

//---------------------STYLE COMPONENT ------------------------//
export const LivingStyled = styled.div`
    .payonline-guide {
        margin-top: 20px;
        .ant-divider {
            margin: 20px 0;
        }
        .guide-icon {
            color: ${colors.green};
        }
        .guide-text {
            font-size: 14px;
            font-weight: 600;
        }
    }
    .children-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 30px;
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            background: ${colors.yellow};
            border-radius: 100%;
            color: ${colors.primary};
            font-size: 12px;
            margin-right: 8px;
        }
    }
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
