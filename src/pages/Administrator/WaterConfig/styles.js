import styled from "styled-components";
export const WaterConfigStyle = styled.div`
  .title-text {
    font-weight: 600;
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 10px;
  }
  .ant-table-tbody > tr:hover {
    .float-action__wrapper {
      min-width: 80px;
      display: inline-flex;
    }
  }
  .index {
    display: flex;
    justify-content: center;
  }
  .water-price-text {
    font-weight: 600;
    font-size: 16px;
    color: darkblue;
    background-color: lightblue;
    width: auto;
    padding: 0px 5px;
    border-radius: 5px;
  }
  .WaterPrice-box {
    display: flex;
    justify-content: space-between;
  }
  .icon-button-box {
    display: flex;
    width: auto;
  }
  .ml {
    margin-right: 5px;
  }
`;
export const WrapperButton = styled.div`
  display: flex;
  gap: 20px;
  .ant-btn {
    background: linear-gradient(90deg, #154398, #ed1117) !important;
    border-color: #fff !important;
    color: #fff !important;
    height: 42px !important;
    padding: 0 30px;
    font-weight: 500;
    box-shadow: none !important;
  }
`;
