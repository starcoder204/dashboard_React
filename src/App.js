import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, Redirect } from "react-router-dom";

import history from './history.js';
import './App.css';
import Login from './pages/Login/login';
import Main from './pages/Main/main';
import Plans from './pages/Plans/plans';
import Settings from './pages/Settings/settings';

function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/plan" component={Plans} />
        <Route path="/setting" component={Settings} />
      </div>
    </Router>
  );
}

export default App;
