import { Table } from "antd";
import { styled } from "styled-components";

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