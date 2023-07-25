import { Modal, Table } from "antd";
import { styled } from "styled-components";


export const TableStyled = styled(Table)`
.text-ellipsis{
        -webkit-line-clamp: 1 !important;
        line-clamp: 1 !important;
        -webkit-box-orient: vertical !important;
        display: -webkit-box !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;

    }
    .ant-table-row{
        &:hover{
            .action{
                display: inline-flex;
            }
        }
    }
    .custom-divider{
        min-width: calc(100% + 32px);
        margin-left: -16px;
    }

    .ant-table-cell{
        text-align: center;
    }
    .ant-table-tbody>tr>.ant-table-cell{
        position: relative;
        .italic{
            font-style: italic;
            color: #666;
        }
            
        
    }
    .ant-table-thead>tr>.ant-table-cell{
        background-color: #154398;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
    }
    .ant-table-tbody>tr{
        
    }
    .ant-table-tbody>tr.ant-table-row:hover>td{
        background-color: #e3f3fe;
        cursor: pointer;
    }
    .italic{
        font-weight: 400;
        
    }

    .item-green{
        color:#00AEAC ;
        font-weight: 600;
    }
    .item-blue{
        color:#0D99FF ;
        font-weight: 600;
    }
    .item-orange{
        color:#F88C00 ;
        font-weight: 600;
    }
    .item-black{
        color:#172B4D ;
        font-weight: 600;
    }

    
`
export const WrapperProduct = styled.div`
    
    .product-image{
        width: 60px;
        height: 60px;
        border: 1px solid #DDD;
    }
    .product-name{
        font-weight: 600;
        font-size: 13px;
        color: #212529;
    }
    .product-view{
        text-align: start;
        color: #000000;
        display: flex;
        gap: 5px;
    }
`

export const WrapperProductQuantity = styled.div`

    .product-quantity{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
    }
`

export const WrapperAction = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    right: 10px;
    background-color:rgb(227, 243, 254) ;
    display: none;
    top: 0;
    height: 100%;
    min-width: 80px;
    z-index: 999;
    .action-icon{
        width: 36px;
        height: 36px;
        background: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
`
export const ModalStyled = styled(Modal)`
    .ant-form{
        margin-top: 10px;
    }
    .ant-form-item{
            margin-bottom: 10px;
        }
    label{
        font-weight: 700;

        &::before{
            content: '*';
            color: red;
        }
    }

    .ant-btn-primary{
        background: linear-gradient(90deg,#154398,#ed1117)!important;
        border-color: #fff!important;
        color: #fff!important;
    }
`