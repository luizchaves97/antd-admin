import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import config from '~/config';
import routes from '~/routes/routes';

import { MenuContainer } from './style';

const SiderMenu = withRouter(({ location }) => {
  const { SubMenu, Item } = Menu;
  const routeSidebar = routes.filter(route => route.sidebar && !route.parentId);
  const routerActive = routes.filter(
    route => route.path === location.pathname
  )[0];

  return (
    <MenuContainer
      theme={config.theme}
      mode="inline"
      defaultSelectedKeys={[routerActive.key]}
    >
      {routeSidebar.map(item => {
        if (item.subMenu) {
          const subMenuItem = routes.filter(
            route => route.parentId === item.key
          );
          return (
            <SubMenu
              title={
                <span>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </span>
              }
              key={item.key}
            >
              {subMenuItem.map(subItem => (
                <Item key={subItem.key}>
                  <Link to={subItem.path}>
                    <Icon type={subItem.icon} />
                    <span>{subItem.name}</span>
                  </Link>
                </Item>
              ))}
            </SubMenu>
          );
        }
        return (
          <Item key={item.key}>
            <Link to={item.path}>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </Link>
          </Item>
        );
      })}
    </MenuContainer>
  );
});

export default SiderMenu;
