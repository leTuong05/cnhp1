import { Modal, Table } from "antd";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    
`
export const ModalStyled = styled(Modal)`
    .ant-modal-content{
        gap: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
    .text-confirm{
        font-size: 16px;
        font-weight: 600!important;
        color: #222d4b;
    }
    .ant-btn{
        height: 37px!important;
    }
    .ant-btn-primary{
        align-items: center;
        border-radius: 6px!important;
        font-weight: 500;
        
        background: #fff!important;
        border-color: #154398!important;
        color: #154398!important;
    }
    .ant-btn-default{
        min-width: 84px;
        background: #154398!important;
        border-color: #154398!important;
        color: #fff!important;
    }
    .icon{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
`
export const TableStyled = styled(Table)`
    .ant-table-thead{
        background-color: #154398;
    }

    .ant-table-thead>tr>.ant-table-cell{
        text-align: center;
        background-color: #154398;
        color: #fff;
        text-transform: uppercase;
        padding: 12px;
        font-size:13px;
    }

    .ant-table-cell{
        text-align: center;
    }
    .ant-table-tbody>tr>.ant-table-cell{
        .italic{
            color: #666;
        }
        

    }
    .ant-table-row {
        &:hover{
            .action{
                display: flex;
            }
            
        }
    }
    .italic{
        font-style: italic;
        font-weight: 400;
    }

    .item-blue{
        font-weight: 600;
        color: #0D99FF;
    }
    .item-orange{
        font-weight: 600;
        color: #FF720D;
    }
    .item-green{
        font-weight: 600;
        color: #00AEAC;
    }
    .item-red{
        color: #FF4648;
        font-weight: 600;
    }
    
`

export const WrapperAction = styled.div`
position: relative;
.action{
    display: none;
    position: absolute;
    right: -5px;

    top: 0;
    
    justify-content: center;
    align-items: center;
    gap: 20px;
}
    .icon-edit{
        cursor: pointer;
        width: 36px;
        height: 36px;
        background: rgb(221, 254, 240);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon-delete{
        cursor: pointer;
        width: 36px;
        height: 36px;
        background: rgb(255, 233, 236);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const WrapperBodyModal = styled.div`

`