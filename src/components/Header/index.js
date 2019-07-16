import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Avatar } from 'antd';

import { logoPath } from '~/config';
import { HeaderFixed, MenuHeader, ButtonCollapsed } from './style';

const { SubMenu } = Menu;
class Header extends PureComponent {
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

Header.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Header;
