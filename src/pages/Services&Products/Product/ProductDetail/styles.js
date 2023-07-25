import { constant } from "lodash";
import { styled } from "styled-components";

export const Wrapper = styled.div`
padding: 15px 0;

.btn-cart{
    
    font-size: 14px;
    color: #000;

}
.content{
    box-shadow: 0px 0px 30px 0px rgba(21, 66, 151, 0.10);
    padding-left:  0 !important;
}
.ant-row{
    margin-left: 0 !important;
    margin-right: 0 !important;
}
`

export const WrapperInfo = styled.div`
box-shadow: 0px 0px 30px 0px rgba(21, 66, 151, 0.10);
    padding: 20px;
    width: 100%;
    margin-bottom: 15px;
    .list-img{
        display: flex;
        gap: 10px;
        margin-top: 10px;
        .item{
            width: 81px;
            height: 81px;
            border: 1px solid #DDD;
            border-radius: 4px;
            cursor: pointer;
        }
    }
    .slick-list{
        border: 1px solid #DDD;
        width: 355px;
        height: 355px;
        border-radius: 4px;
    }
    .slick-track {
        display: flex;
        

        .slick-slide{
            width: 100% !important;
            height: 355px;
            
        }
    }
    .slick-slide {
        img{
            width: 100%;
        }
    }
`
export const ProductRate = styled.p`
margin:20px 0 30px 0;
.rate-star{
    margin-right: 10px;
    
}
.rate-text{
    font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: #666;
}
.star{
    color: #FFD600;
    
}
`

export const ProductPrice = styled.div`
margin-bottom: 30px;
.underline{
    text-decoration: underline;
}
.price{
    font-size: 36px;
    color: #ED1117;
    font-weight: 400;

}

.price-sale{
    font-size: 16px;
color: #666;
font-weight: 400;
text-decoration-line: line-through;
}

.sale-percent{
    background-color: #F88C00;
    border-radius: 4px;
    color: #fff;
    padding: 2px;
    margin-left: 20px;
}
`
export const ProductQuantity = styled.div`
margin-bottom: 20px;
display: flex;
gap: 30px;
align-items: center;

.title{
    font-variant: 14px;
    font-weight: 600;
    color: #666;
}
.control{
    display:flex;
    gap: 20px;
    align-items: center;
}
.decrease, .increase{
    background-color: #F0F2F5;
    border: none;
}
.total{
    color: #666;
}
`
export const WrapperButton = styled.div`
display: flex;
.btn-cart{
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 16px;
    margin-right: 10px;
    padding: 0 20px;
    height: 45px;
}
.btn-buy{
background-color: #ED1117;
padding: 0 20px;
    height: 45px;
    font-size: 16px;
    color: #fff;
}

`
export const Line = styled.div`
height: 3px;
width: 80px;
background: linear-gradient(90deg, #154297 0%, #ED1E24 100%);
position: absolute;
bottom: 0;

`

export const WrapperDescription = styled.div`
    padding: 20px;
    .title{
        position: relative;
        padding-bottom: 10px;
    }
    .description{
        padding: 20px;
        border: 1px solid #DDD;
    }

`
export const WrapperBestSale = styled.div`

`

export const WrapperRate = styled.div`
    padding: 20px;
    .title{
        position: relative;
        padding-bottom: 10px;
    }
`

