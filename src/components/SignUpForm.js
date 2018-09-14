import React from "react";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import HowToReg from "@material-ui/icons/HowToReg";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "50%",
    margin: "0 auto",
    minHeight: "250px"
  },
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  button: {
    marginTop: "5%",
    width: "100%"
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={1}>
          <Avatar className={classes.avatar}>
            <HowToReg />
          </Avatar>
          <Typography variant="headline">Sign Up</Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              autoFocus
              required
              id="displayName"
              label="Display Name"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="email-input"
              label="Email"
              type="email"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="password-input"
              label="Password"
              type="password"
              className={classes.textField}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
