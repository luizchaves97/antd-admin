import React from 'react';
import { Breadcrumb, Icon } from 'antd';

import { Container } from './style';

function Bread() {
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <Icon type="home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <Icon type="user" />
          <span>Dashboard</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}

export default Bread;
