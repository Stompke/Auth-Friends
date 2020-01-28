import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to='/login' >Login</Link>
        </li>
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {}

        <Switch>
          <Route path='/login' component={LoginForm} />
        </Switch>
        

      </header>
    </div>
  );
}

export default App;
