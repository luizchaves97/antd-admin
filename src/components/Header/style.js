import styled from 'styled-components';
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;

export const HeaderFixed = styled(Header)`
  background: #fff;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: ${props => {
    if (props.isMobile) {
      return '100%';
    }
    if (props.collapsed) {
      return 'calc(100% - 80px)';
    }
    return 'calc(100% - 256px)';
  }};
  z-index: 29;
  transition: width 0.2s;

  .ant-menu-submenu-title {
    height: 64px;
  }

  .ant-menu-horizontal {
    line-height: 64px;

    & > .ant-menu-submenu:hover {
      color: #ff7900;
      background-color: #f9f9fc;
    }
  }

  .ant-menu {
    border-bottom: none;
    height: 64px;
  }

  .ant-menu-horizontal > .ant-menu-submenu {
    top: 0;
    margin-top: 0;
  }

  .ant-menu-horizontal > .ant-menu-item,
  .ant-menu-horizontal > .ant-menu-submenu {
    border-bottom: none;
  }

  .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-item-open,
  .ant-menu-horizontal > .ant-menu-item-selected,
  .ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-horizontal > .ant-menu-submenu-active,
  .ant-menu-horizontal > .ant-menu-submenu-open,
  .ant-menu-horizontal > .ant-menu-submenu-selected,
  .ant-menu-horizontal > .ant-menu-submenu:hover {
    border-bottom: none;
  }
`;

export const MenuHeader = styled(Menu)`
  border-bottom: #fff;

  span {
    &:first-of-type {
      color: #999;
      margin-right: 5px;
    }
  }

  .ant-avatar {
    margin-left: 8px;
  }
`;

export const ButtonCollapsed = styled(Icon)`
  width: 64px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ff7900;
    background-color: #f9f9fc;
  }
`;
