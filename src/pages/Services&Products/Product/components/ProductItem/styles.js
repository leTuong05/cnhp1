import { styled } from "styled-components";

export const Wrapper = styled.div`
    padding: 10px;
    
    &:hover{
        box-shadow: 0px 0px 20px 0px rgba(21, 67, 152, 0.10);
    border-radius: 8px;
    }

    .product-name{
        white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
    }
`
export const ProductImage = styled.img`
    border: 1px solid #DDD;
    border-radius: 4px;
    margin-bottom: 20px;
    width: 100%;
    object-fit: contain;
    height: 300px;
`
export const ProductRate = styled.h3`
    margin-top: 20px;
    margin-bottom: 20px;
    .rate-star{
        font-size: 16px;
        margin-right: 8px;
    }
    .rate-text{
        font-size: 14px;
        color: #666;
    }
`

export const ProductPrice = styled.div`

.price{
    font-size: 16px;
    color: #ED1117;
    font-weight: 600;
    margin-bottom: 10px;
}
.price-sale{
    text-decoration-line: line-through;
    font-size: 14px;
    color: #666;
    font-weight: 400;
    margin-bottom: 10px;
}
    .underline{
        text-decoration-line: underline;
    }
`