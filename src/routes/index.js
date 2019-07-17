import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignInPage from '~/pages/SignIn';
import DashboardPage from '~/pages/Dashboard';
import NotFoundPage from '~/pages/404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignInPage} />
      <Route path="/dashboard" component={DashboardPage} isPrivate />

      <Route path="/" component={NotFoundPage} />
    </Switch>
  );
}
