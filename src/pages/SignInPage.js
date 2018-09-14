import React from "react";
import { connect } from "react-redux";

import SignInForm from "../components/SignInForm";
import { login } from "../actions/auth";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.login();
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <React.Fragment>
        <SignInForm onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginPage);
