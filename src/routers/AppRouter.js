import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import DashboardPage from "../pages/DashboardPage";
import AddPostPage from '../pages/AddPostPage';

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PublicRoute path="/signin" component={SignInPage} />
        <PublicRoute path="/signup" component={SignUpPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/addpost" component={AddPostPage} />
      </Switch>
    </Router>
  );
};
