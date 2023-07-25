import { styled } from "styled-components";
import { themeStyles } from "../GlobalStyles";

export const Wrapper = styled.div`
    padding: 30px 0;
    .info{
        margin-top: 16px;
        margin-bottom: 30px;
    }
    .datetime, .author{
        margin-right: 50px;
        font-size: 12px;
        color: #666;
            .icon{
                margin-right: 8px;
            }
    }
    
    .post-prev{
        
        span{
            color: ${themeStyles.mainColor};
            font-size: 14px;
            font-weight: 600;
        }
        .icon-angle{
        color: red;
        margin-right: 8px;
    }
    }
`
export const WrapperTag = styled.div`
padding: 20px 0;
border-top: 1px solid #DDDDDD;
border-bottom: 1px solid #DDDDDD;
margin-bottom: 60px;

`
export const TagItem = styled.div`
padding: 10px 8px;
border: 1px solid #DDD;
border-radius: 4px;
`
export const WrapperPostRelated = styled.div`
margin-top: 60px;
    .title{
        padding-bottom: 15px;
        position: relative;
        border-bottom: 1px solid #DDD;
    }
.list-post-related{
    display: flex;
    flex-direction: column;
    gap: 20px;
    p{
        white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
    padding: 30px 0;
}
.post-item{
    font-size: 14px;
    color: ${themeStyles.mainColor};
    font-weight: 600;
    
}
`