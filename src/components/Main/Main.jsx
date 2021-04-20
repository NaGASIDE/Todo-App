import React from 'react';
import { Navbar } from './Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MyDay } from './Pages/MyDay/MyDay'
import { Important } from './Pages/Important/Important'
import { Planed } from './Pages/Planed/Planed' 

export function Main() {
   return (
     <div>
       <Router>
         <Navbar />
         <Switch>
           <Route path='/my-day' exact component={MyDay} />
           <Route path='/important' component={Important} />
           <Route path='/planed' component={Planed} />
         </Switch>
       </Router>
     </div>
   )
}