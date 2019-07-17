import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Drawer } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';

import Header from '~/components/Header';
import Sider from '~/components/Sider';
import Bread from '~/components/Bread';

import { toggleMenu } from '~/store/modules/user/actions';

import config from '~/config';

import { Wrapper, Container, ContainerContent } from './styles';

const { Footer } = Layout;

function DefaultLayout({ children }) {
  const dispatch = useDispatch();
  const { collapsed } = useSelector(state => state.user.config);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const enquireHandler = enquireScreen(mobile => {
      if (isMobile !== mobile) {
        setIsMobile(mobile);
      }
    });

    return () => {
      unenquireScreen(enquireHandler);
    };
  }, [isMobile]);

  function handleToggle() {
    dispatch(toggleMenu());
  }

  const headerProps = { isMobile, handleToggle };
  const siderProps = { isMobile };

  return (
    <>
      <Layout>
        {isMobile ? (
          <Drawer
            maskClosable
            closable={false}
            onClose={handleToggle}
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
            <Sider {...siderProps} />
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

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
