import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './RouteWrapper';

import routes from './routes';

export default function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.key}
          path={route.path}
          exact={route.exact ? route.exact : false}
          component={route.component}
          isPrivate={route.isPrivate}
        />
      ))}
    </Switch>
  );
}
