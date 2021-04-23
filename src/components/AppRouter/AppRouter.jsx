import React from 'react';
import { privateRoutes, publicRoutes } from '../Routes/routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LOGIN_ROUTE, TODO_ROUTE } from '../../utilities/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config'

export const AppRouter = () => {
  const [user] = useAuthState(auth);

  const createRoutes = (routesArray) => {
    return routesArray.map(({ path, Component }) => (
      <Route key={path} path={path} component={Component} exact={true} />
    ));
  };

  const checkingActiveRoutes = () => {
    if (user) {
      return (
        <>
          {createRoutes(privateRoutes)}
          <Redirect to={TODO_ROUTE} />
        </>
      );
    }
    if (!user) {
      return (
        <>
          {createRoutes(publicRoutes)}
          <Redirect to={LOGIN_ROUTE} />
        </>
      );
    }
  };

  return <Switch>{checkingActiveRoutes()}</Switch>;
};
