import styled from "styled-components";

export const LayoutStyled = styled.div`
  .online-support {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #a3a3a3;
  }
  .hotline {
    color: #ed1117;
    font-size: 14px;
    font-weight: 600;
  }
  .icon-button {
    font-size: 16px;
  }
  .layout-action {
    margin-left: 0px !important;
    margin-right: 0px !important;
    margin-top: 10px !important;
    width: 100%;
    justify-content: space-between;
    @media only screen and (min-width: 700px) {
      margin: unset !important;
      width: unset;
      justify-content: unset;
      margin-top: 0px !important;
    }
  }
  .button-red {
    background: #e50500;
    color: white;
    font-weight: 600;
  }
  .name-branch {
    font-weight: 600;
    font-size: 15px;
    line-height: 150%;
    color: #154398;
    margin-left: 10px;
  }
  .ant-menu-item,
  .ant-menu-submenu {
    padding-bottom: 15px !important;
  }
  .ant-menu-submenu-selected::after,
  .ant-menu-item-selected::after {
    background: unset !important;
  }
  .ant-menu-sub.ant-menu-inline {
    background: transparent;
  }
  .ant-menu-item:hover .ant-menu-title-content {
    color: #154398 !important;
    font-weight: 600;
  }
  .ant-menu-submenu-title:hover .ant-menu-title-content {
    color: #154398 !important;
    font-weight: 600;
  }
  .ant-menu-item:hover .ant-menu-title-content {
    color: #154398 !important;
    font-weight: 600 !important;
  }
  .ant-menu-item-only-child .ant-menu-title-content {
    color: #212529;
    font-weight: 400 !important;
  }
  .ant-menu-item-selected .ant-menu-title-content {
    font-weight: 600 !important;
  }
  .ant-menu-item .ant-menu-title-content,
  .ant-menu-submenu-title .ant-menu-title-content {
    color: #154398;
    font-weight: 600;
  }
  .ant-menu-submenu {
    top: 0px !important;
  }
  .ant-menu-item {
    padding-left: 24px !important;
  }

  .ant-menu-item-selected .ant-menu-title-content {
    color: #154398;
    font-weight: 600;
  }
  .ant-menu-sub .ant-menu-item {
    margin-left: -12px;
    width: 100%;
    padding-left: 73px !important;
    border-radius: 0px 8px 8px 0px;
  }
  .ant-menu-item-selected {
    background: #ffffff !important;
    border-radius: 0px 8px 8px 0px;

    box-shadow: 2px 0px 3px rgb(0 0 0 / 5%);
    width: calc(100% - 12px);
  }
  .ant-menu-submenu-selected .ant-menu-item-selected {
    background: #ffffff;
    box-shadow: 2px 0px 3px rgb(0 0 0 / 5%);
  }

  .administrator {
    cursor: pointer;
  }
`;
