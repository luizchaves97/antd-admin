import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import MyAccount from '~/pages/MyAccount';

import NotFound from '~/pages/404';

export default [
  {
    key: 'signin',
    path: '/',
    component: SignIn,
    isPrivate: false,
    exact: true,
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    icon: 'dashboard',
    name: 'Dashboard',
    component: Dashboard,
    isPrivate: true,
    sidebar: true,
  },
  {
    key: 'myaccount',
    path: '/my-account',
    component: MyAccount,
    isPrivate: true,
  },
  {
    key: 'menutree',
    path: '/menu-tree-example',
    icon: 'user',
    name: 'Menu Tree Example',
    component: Dashboard,
    isPrivate: true,
    sidebar: true,
    subMenu: true,
  },
  {
    key: 'menutree-2',
    path: '/menu-tree-example-2',
    parentId: 'menutree',
    icon: 'user',
    name: 'Menu Tree Example 2',
    component: Dashboard,
    isPrivate: true,
    sidebar: true,
  },
  {
    key: '404',
    path: '*',
    component: NotFound,
    isPrivate: false,
  },
];
