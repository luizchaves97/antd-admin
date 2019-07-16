import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import PrivateLayout from 'layouts/PrivateLayout';

import DashboardPage from 'pages/Dashboard';
import LoginPage from 'pages/Login';
import NotFoundPage from 'pages/404';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <PrivateLayout>
          <Component {...props} />
        </PrivateLayout>
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
