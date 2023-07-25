import { styled } from "styled-components";

export const Wrapper = styled.div`
background: #f7f7f7;
padding: 20px;


`
export const WrapperTitle = styled.div`
 position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid #DDD;
    .line{
    position: absolute;
    bottom: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #154297 0%, #ED1E24 100%);

}
`

export const WrapperItem = styled.div`
    padding: 30px 0;
    display: flex;

    flex-direction: column;
    gap: 30px;
    justify-content: center;

    .image{
        width: 259px;
        height: 259px;
        border: 1px solid #DDD;
        background: #fff;
    margin-bottom: 10px;
    }
    .price{
        color: #ED1117;
        font-size: 16px;
        font-weight: 600;
        margin-top: 10px;
    }
`
