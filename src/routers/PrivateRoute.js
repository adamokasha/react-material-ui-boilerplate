import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import NavMain from "../components/NavMain";

export const PrivateRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <NavMain>
          <Component {...props} />
        </NavMain>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(PrivateRoute);
