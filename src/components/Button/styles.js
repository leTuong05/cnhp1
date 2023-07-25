import { Button } from 'antd';
import styled, { css } from 'styled-components';
import { colors } from '../../styles';

export const ButtonPrimaryStyled = styled(Button)`
        border-radius: 4px;
        background: ${(props) => props.backgroundColor || 'linear-gradient(90deg, #154398 0%, #ed1117 100%)'};
        color: ${(props) => props.color || colors.white}};
        font-size: 16px;
        font-weight: 600;
    `;
