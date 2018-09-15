import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Edit from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  
  layout: {
    width: '100%',
    display: 'block',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '80%'
    },
    [theme.breakpoints.up('md')]: {
      width: '65%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '45%'
    }
  },
  paper: {
    minHeight: '300px',
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: `${theme.spacing.unit}px auto`,
    backgroundColor: theme.palette.secondary.main
  },
  textField: {
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width: "100%"
  },
  button: {
    width: '100%',
    marginTop: '5%'
  }
});

class PostForm extends React.Component {
  render() {
    const { classes, children } = this.props;

    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Edit />
            </Avatar>
            <Typography align="center" variant="headline">Add Post</Typography>
            <form>
              <TextField
                id="full-width"
                label="Title"
                placeholder="Enter a title"
           
                margin="normal"
                className={classes.textField}
              />
              <TextField
                id="full-width"
                label="Category"
                placeholder="Enter a category"
                
                margin="normal"
                className={classes.textField}
              />{' '}
              <TextField
                id="full-width"
                label="Thumbnail URL"
                placeholder="http://www.website.com/thumbnail.jpg"
                
                margin="normal"
                className={classes.textField}
              />
              <TextField
                id="full-width"
                label="Main Image URL"
                
                margin="normal"
                className={classes.textField}
              />{' '}
              <TextField
                id="full-width"
                label="Body"
                placeholder="Write your post here"
                multiline
                rows={6}
                margin="normal"
                className={classes.textField}
              />
              <Button
              color="primary"
              variant="contained"
              size="large"
              className={classes.button}
              >Save Post</Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

PostForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostForm);
