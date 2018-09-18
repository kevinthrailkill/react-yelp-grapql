import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

const styles = {
  root: {
    width: '90%',
    paddingTop: '40px'
  },
  validZip: {
    color: 'green',
    '&:after': {
      backgroundColor: 'rgba(0, 0, 0, 0.42)',
      borderBottom: '2px solid green'
    }
  },
  invalidZip: {
    color: '#d32323'
  }
};

const ZipcodeInput = props => {
  const { classes, handleChange, zipcode, validZip } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subheading">Enter In A US Zip Code</Typography>
      <Input
        required
        className={validZip ? classes.validZip : classes.invalidZip}
        autoFocus={true}
        onChange={handleChange}
        value={zipcode}
      />
    </div>
  );
};

ZipcodeInput.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  zipcode: PropTypes.string.isRequired,
  validZip: PropTypes.bool.isRequired
};

export default withStyles(styles)(ZipcodeInput);
