import { Table } from "antd";
import { styled } from "styled-components";


export const TableStyled = styled(Table)`
    .custom-divider{
        min-width: calc(100% + 32px);
        margin-left: -16px;
    }

    .ant-table-cell{
        text-align: center;
    }
    .ant-table-tbody>tr>.ant-table-cell{
        
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