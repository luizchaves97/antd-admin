import React, { PureComponent } from 'react';
import { Layout } from 'antd';

import config from 'config';
import ScrollBar from 'components/ScrollBar';
import SiderMenu from 'components/Menu';

import { MenuContainer, Brand, Logo } from './style';

class Sider extends PureComponent {
  render() {
    const { isMobile, collapsed, toggle } = this.props;

    return (
      <Layout.Sider
        width={256}
        theme={config.theme}
        breakpoint="lg"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={isMobile ? null : toggle}
      >
        <Brand>
          <Logo>
            <img alt="logo" src={config.logoPath} />
            {collapsed ? null : <h1>{config.siteName}</h1>}
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
}

export default Sider;
