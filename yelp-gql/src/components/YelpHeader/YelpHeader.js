import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../assets/img/default@2x.png';

const styles = {
  root: {
    flexGrow: 1
  }
};

const YelpHeader = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="yelp logo" style={{ height: '40px' }} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

YelpHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(YelpHeader);
