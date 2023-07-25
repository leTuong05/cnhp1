import { List } from "antd";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    

`
export const ImgStyled = styled.img`
    width: 40px;
    height: 40px;
`
export const ListStyled = styled(List)`
    .ant-avatar{
        width: 40px;
        height: 40px;
    }
    .datetime{
        color: #666;
        margin: 10px 0;
    }
    .description{
        font-size: 14px;
        color: #212529;
        margin-bottom: 10px;
    }
    .img-feedback{
        display: flex;
        gap: 10px;
        img{
            width: 72px;
            height: 72px;
            border: 1px solid rgba(131, 131, 131, 0.10);
        }
    }
`