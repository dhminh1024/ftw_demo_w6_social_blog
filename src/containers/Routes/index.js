import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import DashboardPage from "../DashboardPage";
import PrivateRoute from "./PrivateRoute";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
    </Switch>
  );
};
export default Routes;
