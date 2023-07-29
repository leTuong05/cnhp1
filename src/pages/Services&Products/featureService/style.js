import styled from "styled-components";

export const Wrapper = styled.div`
  h1 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  label {
    font-size: 14px;
    font-weight: 620;
  }

  .ant-upload {
    .ant-btn {
      .ant-btn-icon {
        color: red !important;
      }
      span {
        color: #003eb3;
        font-weight: 600;
      }
    }
  }

  .ant-btn.btnSubmit {
    background: var(--btn-primary-color);
    color: #fff;
    font-weight: 600;
    width: 260px;
    height: 46px;
    font-size: 16px;
  }

  .ant-radio-wrapper {
    font-size: 14px;
  }
`;
