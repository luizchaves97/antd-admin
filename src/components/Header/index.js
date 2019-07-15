import React, { PureComponent } from 'react';
import { Menu, Avatar } from 'antd';

import { logoPath } from 'config';
import { HeaderFixed, MenuHeader, ButtonCollapsed } from './style';

const { SubMenu } = Menu;

export default class Header extends PureComponent {
  render() {
    const { collapsed, isMobile, toggle } = this.props;
    const headerFixedProps = { collapsed, isMobile };

    const rightContent = [
      <MenuHeader key="user" mode="horizontal">
        <SubMenu
          title={
            <>
              <span>Hi,</span>
              <span>Luiz</span>
              <Avatar src={logoPath} />
            </>
          }
        >
          <Menu.Item key="SignOut">Sign out</Menu.Item>
        </SubMenu>
      </MenuHeader>,
    ];

    return (
      <HeaderFixed {...headerFixedProps}>
        <ButtonCollapsed
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
        <div>{rightContent}</div>
      </HeaderFixed>
    );
  }
}
