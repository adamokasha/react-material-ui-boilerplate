import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import NavMain from "../components/NavMain";

export const PublicRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <Redirect to="/" />
      ) : (
        <NavMain>
          <Component {...props} />
        </NavMain>
      )
    }
  />
);

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(PublicRoute);
