import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginLayoutRoute from 'layouts/Login';
import DashboardLayoutRoute from 'layouts/Dashboard';

import DashboardPage from 'pages/Dashboard';
import LoginPage from 'pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <LoginLayoutRoute path="/login" component={LoginPage} />
      <DashboardLayoutRoute path="/dashboard" component={DashboardPage} />
    </Switch>
  );
}
