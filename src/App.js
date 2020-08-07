import React from 'react';
import Login from './pages/login'
import Signup from './pages/signup'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/ingreso" component={Login} />
      <Route exact path="/registro" component={Signup} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
