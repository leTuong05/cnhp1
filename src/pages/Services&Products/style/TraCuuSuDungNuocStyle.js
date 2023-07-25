import styled from 'styled-components'

export const Wrapper = styled.div`
    h1 {
        margin-top: 50px;
        font-weight: 600;
        font-size: 24px;
        color: #154398;
    }

    thead {
        tr {
            .ant-table-cell {
                background-color: #154398;
                color: #fff;
            }
        }
    }

    .ant-pagination {
        display: none;
    }

    .ant-descriptions-item-container {
        flex-direction: column;
    }

    .ant-descriptions-item-label {
        color: #F88C00;
        font-weight: 600;
        font-size: 14px;
    }

`

export const SelectItem = styled.div`

`

export const ContentTop = styled.div`
    /* display: flex; */
    .select {
        h2 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        margin-right: 10px;
    }
    .btn {
        margin-top: 34px;
        width: 270px;
        background: linear-gradient(90deg, rgb(21, 67, 152) 0%, rgb(237, 17, 23) 100%);
    color: rgb(255, 255, 255);
        color: #fff;
        font-size: 14px;
    }

    .col {
        margin-bottom: 20px;
    }

    

`