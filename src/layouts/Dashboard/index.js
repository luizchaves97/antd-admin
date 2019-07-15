import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { Layout, Drawer } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';

import config from 'config';
import Header from 'components/Header';
import Sider from 'components/Sider';
import Bread from 'components/Bread';

import { Container, ContentContainer, ContentContainerChildren } from './style';

const { Footer } = Layout;

class DashboardLayout extends PureComponent {
  state = {
    isMobile: false,
    collapsed: true,
  };

  componentDidMount() {
    this.enquireHandler = enquireScreen(mobile => {
      const { isMobile } = this.state;
      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile,
        });
      }
    });
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { children } = this.props;
    const { isMobile, collapsed } = this.state;
    const { toggle } = this;
    const headerProps = { collapsed, isMobile, toggle };
    const siderProps = { collapsed, isMobile, toggle };
    return (
      <>
        <Layout>
          {isMobile ? (
            <Drawer
              maskClosable
              closable={false}
              onClose={this.toggle}
              visible={collapsed}
              placement="left"
              width={256}
              style={{
                padding: 0,
                height: '100vh',
              }}
              bodyStyle={{
                padding: 0,
              }}
            >
              <Sider {...siderProps} collapsed={false} />
            </Drawer>
          ) : (
            <Sider {...siderProps} />
          )}
          <Container>
            <Header {...headerProps} />
            <ContentContainer>
              <Bread />
              <ContentContainerChildren>{children}</ContentContainerChildren>
              <Footer>{config.copyright}</Footer>
            </ContentContainer>
          </Container>
        </Layout>
      </>
    );
  }
}

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <DashboardLayout>
          <Component {...matchProps} />
        </DashboardLayout>
      )}
    />
  );
};

export default DashboardLayoutRoute;
