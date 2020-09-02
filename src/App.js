import React, { lazy, Suspense } from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const Logintemplate = lazy(() => import('./components/loginpage'));
const Signuptemplate = lazy(() => import('./components/signuppage'))
  
function App() {
  return (
   <Router>
    <div className="container parent">
      <Suspense fallback>
      <Switch>
      <Route exact path="/" name="Login Page" render={props => <Logintemplate {...props}/>} />
      <Route exact path="/account" name="Login Page" render={props => <Signuptemplate {...props}/>} />
      </Switch>
      </Suspense>
    </div>
    </Router>
   
  );
}

export default App;
