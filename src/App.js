import React from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logintemplate from "./components/loginpage";
import Signuptemplate from './components/signuppage';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


 
  
function App() {
  return (
    
   <Router>
    <div className="container parent">
      <Switch>
      {/**login template */} 
      <Route path="/" exact component = {Logintemplate}/>
      {/**logout template */}
      <Route path="/account" exact component = {Signuptemplate}/>
      </Switch>
    </div>
    </Router>
   
  );
}

export default App;
