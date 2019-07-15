import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import MyAccount from '~/pages/MyAccount';

import NotFound from '~/pages/404';

export default [
  // [BEGIN] Public Routes
  {
    key: 'signin',
    path: '/',
    component: SignIn,
    isPrivate: false,
    exact: true,
  },
  // [END] Public Routes

  // [BEGIN] Private Routes
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
    icon: 'user',
    name: 'My Account',
    component: MyAccount,
    isPrivate: true,
  },
  {
    key: 'menutree',
    path: '/menu-tree',
    icon: 'user',
    name: 'Menu Tree',
    component: Dashboard,
    isPrivate: true,
    sidebar: true,
    subMenu: true,
  },
  {
    key: 'menutree-2',
    path: '/menu-tree/menu-tree-example',
    parentId: 'menutree',
    icon: 'user',
    name: 'Menu Tree Example',
    component: Dashboard,
    isPrivate: true,
    sidebar: true,
  },
  // [END] Private Routes

  // 404 Not Found Page
  {
    key: '404',
    path: '*',
    component: NotFound,
    isPrivate: false,
  },
];
