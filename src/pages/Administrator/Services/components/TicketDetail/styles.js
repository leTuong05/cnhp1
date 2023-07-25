import { styled } from "styled-components";

export const WrapperBody = styled.div`
    .title{
        color:  #212529;
        font-size: 14px;
        font-weight: 600;
    }
    span{
        color:  #212529;
        font-size: 14px;
        font-weight: 400;

    }
    .ant-image{
        border: 1px solid rgb(217, 217, 217);
        border-radius: 8px;
        overflow: hidden;
        margin: 4px 6px 0px 0px;
    }
    .ant-upload-wrapper{
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-direction: row-reverse;
    }
    .upload-profile{
        border-radius: 4px;
        border: 1px solid  #DDD;  
        margin: 10px 0px;
        padding: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .ant-btn-default{
            border-radius: 4px;
            background:  #154398;
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.10);
            padding: 0 30px;
            
        }
        .ant-btn-default>span{
            color: white;
        }

        .label{
            color:  #666;
            font-size: 14px;
            font-weight: 400;
        }
    }
    .paper-contract{
        width: 100%;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 4px;
        padding: 12px;
        margin: 10px 0px;
    }
`