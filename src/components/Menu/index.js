import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import config from '~/config';
import routes from '~/routes/routes';

import { MenuContainer } from './style';

const { SubMenu, Item } = Menu;

function SiderMenu() {
  const routeSidebar = routes.filter(route => route.sidebar && !route.parentId);
  return (
    <MenuContainer
      theme={config.theme}
      mode="inline"
      defaultSelectedKeys={['1']}
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
}

export default SiderMenu;
