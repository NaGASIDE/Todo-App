import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MyDay } from './Pages/MyDay/MyDay';
import { Important } from './Pages/Important/Important';
import { Planed } from './Pages/Planed/Planed';
import { Tasks } from './Pages/Tasks/Tasks'
import './Main.sass';

export function Main() {
  return (
    <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/todo/my-day' exact component={MyDay} />
        <Route path='/todo/important' component={Important} />
        <Route path='/todo/planed' component={Planed} />
        <Route path='/todo/tasks' component={Tasks} />
      </Switch>
    </Router>
  </div>
  );
}