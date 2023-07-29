import styled, { css } from 'styled-components';
import { colors, customTitle } from '../../styles';

//---------------------STYLE COMPONENT ------------------------//

export const PayOnline = styled.div`
    .payonline-title {
        ${customTitle};
    }
    .payonline-guide {
        margin-top: 20px;
        .ant-divider {
            margin: 20px 0;
        }
        .guide-icon {
            color: ${colors.green};
        }
        .guide-text {
            font-size: 14px;
            font-weight: 600;
        }
    }
    .content {
        .ant-row {
            display: flex;
            padding: 30px;
            border-radius: 4px;
            background: var(--white, #fff);
            box-shadow: 0px 0px 30px 0px rgba(21, 67, 152, 0.1);
            justify-content: space-between;
            border-top: 3px solid red;
            transition: 0.3s;
            &:hover {
                background: linear-gradient(89deg, #d31727 0%, #1a4295 100%);
                .content-icon {
                    color: ${colors.white};
                }
                .content-text {
                    color: ${colors.white};
                }
                path {
                    fill: ${colors.white};
                }
            }
            .ant-col {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
        .content-text {
            color: ${colors.primary};
            font-size: 20px;
            font-weight: 600;
        }
        .content-icon {
            padding-bottom: 20px;
            color: ${colors.secondary};
            font-weight: 600;
            font-size: 14px;
        }
    }
`;

export const WapperInstall = styled.div`
    label {
        font-size: 22px;
    }
`
