import { privateRoutes, publicRoutes } from 'components/Routes/routes';
import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { LOGIN_ROUTE, TODO_ROUTE } from 'utilities/consts';
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../../index'

export function AppRouter() {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)
  return user ?
  (
    <Switch>
        {privateRoutes.map(({path, Component}) => 
          <Route key={path} path={path} component={Component} exact={true} />)}
        <Redirect to={TODO_ROUTE} />
    </Switch>
  )
  :
  (
    <Switch>
        {publicRoutes.map(({path, Component}) => 
          <Route key={path} path={path} component={Component} exact={true} />
        )}
        <Redirect to={LOGIN_ROUTE} />
    </Switch>
  )
}