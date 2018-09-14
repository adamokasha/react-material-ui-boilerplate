import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import deepOrange from "@material-ui/core/colors/deepOrange";

import App from "./App";
import store from "./store/configureStore";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#8561c5",
      main: "#673ab7",
      dark: "#482880",
      contrastText: "#fff"
    },
    secondary: deepOrange
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("app")
);
