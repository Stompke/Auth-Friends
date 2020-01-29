import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';


import { Route, Link, Switch } from "react-router-dom";
import { checkPropTypes } from 'prop-types';


const App = props => {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to='/login' >Login</Link>
        </li>
        <li>
          <Link to='/friends' >Friends</Link>
        </li>
      </ul>
      <header className="App-header">
        

        <Switch>
          <Route  path='/login' component={LoginForm} />

          <PrivateRoute path='/friends' component={Friends} />
        </Switch>
        

      </header>
    </div>
  );
}

export default App;
