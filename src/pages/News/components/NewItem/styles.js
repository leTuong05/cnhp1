import { themeStyles } from "../GlobalStyles";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap:30px

`
export const ImgStyled = styled.img`
    
    height: 200px;
    max-width: 260px;
`
export const WrapperNewInfo = styled.div`
    
    p{
        color: #666;
        font-size: ${themeStyles.font12};
        margin-top: 16px;
    }
    p+p{
        
        font-size: ${themeStyles.font14};
        margin-bottom: 0px;
    }

`