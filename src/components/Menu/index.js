import React from 'react';
import { Menu, Icon } from 'antd';

import config from '~/config';

import { MenuContainer } from './style';

const { SubMenu } = Menu;

function SiderMenu() {
  return (
    <MenuContainer
      theme={config.theme}
      mode="inline"
      defaultSelectedKeys={['1']}
    >
      <Menu.Item key="1">
        <Icon type="dashboard" />
        <span>Dashboard</span>
      </Menu.Item>
      <SubMenu
        title={
          <span>
            <Icon type="setting" />
            <span>Navigation Three</span>
          </span>
        }
      >
        <Menu.Item>SubMenuItem</Menu.Item>
      </SubMenu>
    </MenuContainer>
  );
}

export default SiderMenu;
