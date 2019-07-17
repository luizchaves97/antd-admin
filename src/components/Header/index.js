import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu, Avatar } from 'antd';

import { signOut } from '~/store/modules/auth/actions';

import { HeaderFixed, MenuHeader, ButtonCollapsed } from './style';

function Header({ isMobile, handleToggle }) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const { collapsed } = useSelector(state => state.user.config);
  const headerFixedProps = { collapsed, isMobile };
  const { SubMenu } = Menu;

  function menuToggleIcon() {
    if (isMobile) {
      return 'menu';
    }
    if (collapsed) {
      return 'menu-unfold';
    }
    return 'menu-fold';
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <HeaderFixed {...headerFixedProps}>
      <ButtonCollapsed type={menuToggleIcon()} onClick={handleToggle} />
      <div>
        <MenuHeader key="user" mode="horizontal">
          <SubMenu
            title={
              <>
                <span>Hi,</span>
                <span>{profile.username}</span>
                <Avatar src={profile.avatar} />
              </>
            }
          >
            <Menu.Item key="SignOut" onClick={handleSignOut}>
              Sign out
            </Menu.Item>
          </SubMenu>
        </MenuHeader>
      </div>
    </HeaderFixed>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Header;
