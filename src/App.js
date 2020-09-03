import React, { lazy, Suspense } from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 

import {HashRouter, Switch, Route} from 'react-router-dom';
const Logintemplate = lazy(() => import('./components/loginpage'));
const Signuptemplate = lazy(() => import('./components/signuppage'))
  
function App() {
  return (
   <HashRouter>
    <div className="container parent">
      <Suspense fallback>
      <Switch>
      <Route exact path="/" name="Login Page" render={props => <Logintemplate {...props}/>} />
      <Route exact path="/account" name="Login Page" render={props => <Signuptemplate {...props}/>} />
      </Switch>
      </Suspense>
    </div>
    </HashRouter>
   
  );
}

export default App;
