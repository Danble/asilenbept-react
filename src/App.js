import React from 'react';
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './assets/styles/main.css'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ingreso" component={Login} />
      <Route exact path="/registro" component={Signup} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
