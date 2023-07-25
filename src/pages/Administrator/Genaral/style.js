import { Modal } from 'antd'
import styled from 'styled-components'

export const Wapper = styled.div`
    .ant-col {
        padding-left: -16px;
        padding-right: -16px;
    }

    

`

export const WapperModal = styled(Modal)`
    .ant-modal-content {
        .ant-modal-footer {
            display: none ;
        }
    .ant-modal-body {
        thead {
                tr {
                    th {
                        background-color: #154398;
                        color: #fff;
                        text-align: center;
                    }
            }          
        }
    }
    }
`