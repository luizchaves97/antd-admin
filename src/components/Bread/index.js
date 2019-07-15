import React from 'react';
import { withRouter } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';

import routes from '~/routes/routes';

import { Container } from './style';

const Bread = withRouter(({ location }) => {
  const { Item } = Breadcrumb;

  const paths = location.pathname.split('/').filter(route => route);

  const BreadcrumbItems = paths.map((path, index) => {
    const url = `/${paths.slice(0, index + 1).join('/')}`;
    const routeData = routes.filter(item => item.path === url)[0];
    const last = paths.length === index + 1;
    if (!routeData) {
      return false;
    }

    return last ? (
      <Item key={routeData.key}>
        <Icon type={routeData.icon} />
        <span>{routeData.name}</span>
      </Item>
    ) : (
      <Item key={routeData.key} href={routeData.path}>
        <Icon type={routeData.icon} />
        <span>{routeData.name}</span>
      </Item>
    );
  });

  return (
    <Container>
      <Breadcrumb>
        <Item href="/dashboard">
          <Icon type="home" />
        </Item>
        {BreadcrumbItems}
      </Breadcrumb>
    </Container>
  );
});

export default Bread;
