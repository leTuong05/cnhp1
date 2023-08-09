import { Button, Modal, Table } from "antd";
import styled from "styled-components";

export const WapperTable = styled(Table)`
  .ant-table-content {
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
`;

export const Wapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 20px;

  .ant-modal-content {
    width: 1024px;
  }
`;

export const ButtonAddUnits = styled(Button)`
  position: absolute;
  right: 30px;
  font-weight: 600;
`;

export const WapperModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  .ant-modal-content {
    height: 640px;
    min-width: 1000px;
  }
  label {
    font-size: 14px;
    font-weight: 600;
  }
  .ant-modal-footer {
    display: none;
  }
`;
