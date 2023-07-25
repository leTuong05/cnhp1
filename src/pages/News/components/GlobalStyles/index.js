import { styled } from "styled-components";
import { Typography } from "antd";

const {Title} = Typography
export const themeStyles = {

    mainColor: "#154398",
    font20: '20px',
    font22: '22px',
    font14: '14px',
    font12: '12px',
    
};

export const TitleStyled = styled(Title)`
margin: 0 !important;
color: ${props => props.color ? props.color : themeStyles.mainColor} !important;
font-size: ${props => props.size ? props.size : themeStyles.font20} !important;
font-weight: ${props => props.weight ? props.weight : 500 }!important;
`
export const Line = styled.div`
    height: 3px;
    width: 76px;
    background: linear-gradient(90deg, #154297 0%, #ED1E24 100%);
    position: absolute;
    bottom: 0;

`
export const StyledComponent = styled(Title)`
    
`;