import { styled } from "styled-components";
import { themeStyles } from "../GlobalStyles";

export const Wrapper = styled.div`
    .header{
        
    }
    .title{
        color: white;
        font-size: ${themeStyles.font20};
        
        
        font-weight: 700;
    }
    .divider{
        background-color: white;
        margin-top: 20px;
    }
    .body{

    }
`


export const Header = styled.div`
        background-color: ${themeStyles.mainColor} ;
        height: 115px;
        padding: 30px;
        
`
export const Body = styled.div`
    background-color:#F7F7F7 ;
    padding: 30px;
`

export const PeopleCare = styled.div`  
    padding: 30px 0;
    border-bottom:4px solid #DDD;
    margin-bottom: 30px;
        .post-item{
            flex-direction: column;
            align-items: flex-start;
        }
        .datetime{
            color: #666;
            margin-top: 20px;
        }

`

export const TagPopular = styled.div`
    .tag-item{
        padding: 10px 8px;
        border: 1px solid  #DDD;
    border-radius: 4px;
    }
    .list-tag{
        margin-top: 30px;
        gap: 10px;
        row-gap: 10px;
    }

`

export const TagItem = styled.div`
border-radius: 4px;
border: 1px solid #DDD;
display: flex;
align-items: center;
justify-content: center;

`