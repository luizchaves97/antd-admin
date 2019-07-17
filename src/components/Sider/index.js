import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import config from '~/config';
import ScrollBar from '~/components/ScrollBar';
import SiderMenu from '~/components/Menu';

import { MenuContainer, Brand, Logo } from './style';

function Sider({ isMobile }) {
  const { collapsed } = useSelector(state => state.user.config);

  return (
    <Layout.Sider
      width={256}
      theme={config.theme}
      breakpoint="lg"
      trigger={null}
      collapsible={!isMobile}
      collapsed={isMobile ? false : collapsed}
    >
      <Brand>
        <Logo>
          <img alt="logo" src={config.logoPath} />
          {collapsed && !isMobile ? null : <h1>{config.siteName}</h1>}
        </Logo>
      </Brand>

      <MenuContainer>
        <ScrollBar
          options={{
            suppressScrollX: true,
          }}
        >
          <SiderMenu />
        </ScrollBar>
      </MenuContainer>
    </Layout.Sider>
  );
}

Sider.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Sider;
