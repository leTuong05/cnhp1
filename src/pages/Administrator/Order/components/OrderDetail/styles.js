import { Steps } from "antd";
import { styled } from "styled-components";


export const WrapperBody = styled.div`
    padding: 20px;
    background: rgb(255, 255, 255);
    box-shadow: rgba(21, 67, 152, 0.15) 0px 0px 10px;
    border-radius: 8px;
    font-size: 14px;

    
    .top-modal{
        display: flex;
        flex-direction:row-reverse;
        padding-top: 0;
        

    }
    .order-id{
        color: #838383;
        font-weight: 600;
        margin-right: 10px;
    }

    .status{
        color: #00C590;
        font-weight: 600;
        margin-left: 10px;
    }
    .step-icon{
        
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    }

    .wrapper-order-address{
        
        .title{
            font-size: 14px;
            color: #212529;
            font-weight: 600;
            margin-bottom: 10px;
        }
        .ant-steps-item-content{
            display: flex !important;
        }
        .ant-steps-item-description{
            display: flex;
            align-items: center;
            color: rgb(0, 197, 144) !important;
        }
        .ant-steps-item-active{
            .ant-steps-icon-dot{
                background: rgb(0, 197, 144) !important;
            }
        }
        
    }
`

export const StepsStyled = styled(Steps)`
    .ant-steps-item-tail{
        margin-left: 65px !important;
        padding: 15px 32px !important;
    }
.ant-steps-item-content{
    margin-left: 10px;
}
    .ant-steps-item-title{
        font-size: 14px;
        color: rgba(0,0,0,.85);
        
    }

    .ant-steps-item-active {
        .custom-color-icon1{
            background:linear-gradient(90deg, rgba(30,66,150,1) 0%, rgba(105,48,103,1) 31%, rgba(230,19,27,1) 100%) ;
            border-radius: 50%;
            
            circle{
                stroke: unset;
            }
            path{
                stroke: white;
            }
        }
        .custom-color-icon2{
            background:linear-gradient(90deg, rgba(30,66,150,1) 0%, rgba(105,48,103,1) 31%, rgba(230,19,27,1) 100%) ;
            border-radius: 50%;
            
            circle{
                stroke: unset;
                fill: unset;
            }
            path{
                stroke: white;
            }
            
        }
        .custom-color-icon4{
            background:linear-gradient(90deg, rgba(30,66,150,1) 0%, rgba(105,48,103,1) 31%, rgba(230,19,27,1) 100%) ;
            border-radius: 50%;
            
            circle{
                stroke: unset;
                fill: unset;
            }
            
            path{
                stroke: white;
            }
        }
    }
`

export const WrapperProduct = styled.div`
display: flex;
align-items: center;
padding: 10px 0;
    img{
        width: 60px;
        height: 60px;
        border: 1px solid  #DDD;
        border-radius: 1px;
        margin-right: 15px;
    }
    .product-name{
        color: #212529;
        font-size: 13px;
        font-weight: 600;
    }
    .quantity{
        color:  #666;
        font-size: 12px;
        font-weight: 600;
    }
    .underline{
        text-decoration:underline;
    }
    .price{
        color:  #ED1117;
        font-size: 13px;
        font-weight: 600;
    }
    .sale-price{
        color:  #777;
        font-size: 13px;
        font-weight: 400;
        text-decoration-line: line-through;
    }
`

export const WrapperCheckout = styled.div`
    .checkout-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
    }
    .title{
        color: #777;
        font-size: 14px;
        font-weight: 400;
    }
    .total{
        color:  #ED1117;
        font-size: 20px;
        font-weight: 400;
    }
`