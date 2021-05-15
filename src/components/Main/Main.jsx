import React, { createContext } from 'react';
import { Navbar } from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { MyDay } from './Pages/MyDay/MyDay';
import { Important } from './Pages/Important/Important';
import { Planed } from './Pages/Planed/Planed';
import { Tasks } from './Pages/Tasks/Tasks'
import { Search } from './Pages/Search/Search'
import { useSelector } from 'react-redux'
import './Main.sass';

 export const ThemeContext = createContext(`someValue`)

export function Main() {
  const {theme} = useSelector(state => state.theme)
  return (
    <div>
    <ThemeContext.Provider value={theme} >
     <Router>
       <Navbar />
       <Switch>
           <Route exact path='/todo/my-day' component={MyDay} />
           <Route path='/todo/important' component={Important} />
           <Route path='/todo/planed' component={Planed} />
           <Route path='/todo/tasks' component={Tasks} />
           <Route path='/todo/search' component={Search} />
       </Switch>
     </Router>
    </ThemeContext.Provider>
  </div>
  );
}