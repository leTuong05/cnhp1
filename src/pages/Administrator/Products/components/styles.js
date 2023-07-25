import styled, { css } from 'styled-components';
import { colors, customTitle } from '../../../../styles';
import { Modal } from 'antd';

//---------------------STYLE COMPONENT ------------------------//

export const ModalStyled = styled(Modal)`
    .upload-items {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        border: 1px dashed #ddd;
        padding: 10px 16px;
        background: #f7f7f7;
        svg {
            color: ${colors.secondary};
        }
        .anticon {
            margin-right: 8px;
        }
    }
    .upload-text {
        display: flex;
        align-items: center;
        margin-left: 12px;
        font-size: 12px;
        font-weight: 400;
        color: #666;
    }
    .upload-list-text {
        font-size: 12px;
        font-weight: 400;
        color: #666;
        margin-left: 32px;
        list-style-type: disc;
    }
    .upload-form {
        .ant-form-item-control {
            .ant-form-item-control-input-content {
                display: flex;
            }
        }
    }
    label {
        font-size: 14px;
        font-weight: 600;
    }
    .tox-statusbar {
        display: none;
    }

    .ant-picker {
        width: 100%;
    }

    .ant-upload {
        width: auto !important;
        height: auto !important;
    }
    .ant-upload-wrapper.ant-upload-picture-card-wrapper {
        width: fit-content;
    }
`;
