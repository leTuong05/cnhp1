import { styled } from "styled-components";
import { Tabs } from 'antd';

export const Wrapper = styled.div`
    padding: 20px;
    border: 1px solid  #DDD;

    .yellow{
        color: #FFD600;
    }
    .gray{
        color: #EFF0F5;
    }
    .bg-yellow{
        background-color: #FFD600;
    }
    .bg-gray{
        background-color: #EFF0F5;
    }

    .anticon-star{
        font-size: 30px;
    }
`
export const WrapperHeader = styled.div`
    display: flex;
    gap: 60px;
`
export const TotalRate = styled.div`
    .total{
        margin-bottom:10px;
        
        span{
            font-size: 30px;
            color: #ccc;
        }
        .number-large{
            font-size: 42px;
            color: black;
        }
    }

    .rate-star{
        margin-bottom: 10px;
    }
    .rate-text{
        font-size: 14px;
        color: #666;

    }
`
export const DetailRate = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
    p{
        display: flex;
        align-items: center;

    }
    .rate-star{
        font-size:20px;
        margin-right: 15px;
    }
    .range{
        width: 140px;
        height: 12px;
        margin-right: 15px;
    }
    .anticon-star{
        font-size: 20px;
    }
`

export const TabsStyled = styled(Tabs)`

.ant-tabs-tab {
    font-size: 16px;
    font-weight: 600;
    color: #154398;
    padding: 20px;
}
.ant-tabs-tab-active{
    border-bottom: 3px solid  !important;
    border-image-slice: 1;
    border-image-source:linear-gradient(90deg, #154297 0%, #ED1E24 100%) !important;
  z-index: 2;
}
.ant-tabs-tab-active>.ant-tabs-tab-btn{
    color: #ED1117 !important;
}


`