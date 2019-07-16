import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Drawer } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';

import Header from '~/components/Header';
import Sider from '~/components/Sider';
import Bread from '~/components/Bread';

import config from '~/config';

import { Wrapper, Container, ContainerContent } from './styles';

const { Footer } = Layout;

class DefaultLayout extends Component {
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
          <Wrapper>
            <Header {...headerProps} />
            <Container>
              <Bread />
              <ContainerContent>{children}</ContainerContent>
              <Footer>{config.copyright}</Footer>
            </Container>
          </Wrapper>
        </Layout>
      </>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
