import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Pages/Login/LoginPage'
import Forgot from './Pages/Forgot/Fogot';
import Singup from './Pages/SingUp/Singup';
import Create from './Pages/Create/Create';
import Edit from './Pages/Edit/Edit';
import List from './Component/Grid';
function RouterComponent() {
  return (
  
    <Router>
    <Switch>
     
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/forget"} component={Forgot} />
      <Route exact path={"/singup"} component={Singup} />
      <Route exact path={"/Create"} component={Create} />
      <Route exact path={"/Edit"} component={Edit} />
      <Route exact path={"/List"} component={List} />
      <Route exact path={"/"} >
        <Redirect to={"/login"}></Redirect>
      </Route>
    </Switch>
  </Router>

  );
}

export default RouterComponent

