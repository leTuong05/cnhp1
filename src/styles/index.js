import styled, { css } from 'styled-components';

//--------------GLOBAL COLOR-------------//

export const colors = {
    primary: '#154398',
    secondary: '#ED1117',
    green: '#00C590',
    white: '#ffffff',
    blue: '#154398',
    yellow: '#F88C00',
    grown: '#666',
    lightGreen: '#DDFEF0',
    lightRed: '#FFE9EC'
};

//--------------MIXINS-----------//

export const customTitle = css`
    font-size: 22px;
    font-weight: 600;
    color: ${colors.primary};
    margin-top: 20px;
    &:after {
        content: '';
        width: 76px;
        display: block;
        height: 3px;
        background: linear-gradient(90deg, #154297 0%, #ed1e24 100%);
    }
    .ant-divider {
        margin: 15px 0 -3px 0;
    }
`;

// icon chấm tròn màu cam
export const Dots = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #f88c00;
`;
