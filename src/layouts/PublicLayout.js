import React from "react";
import PublicNavbar from "../containers/PublicNavbar";
import HomePage from "../containers/HomePage";
import LoginPage from "../containers/LoginPage";
import RegisterPage from "../containers/RegisterPage";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
