import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: '90%',
    padding: '40px 0px'
  }
};

const RadiusSlider = props => {
  const { classes, value, min, max, step, unit, handleChange } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subheading">
        Select A Value Between {min} - {max} {unit}
      </Typography>
      <Slider
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
      />
      <Typography>
        {value} {value === 1 ? unit : unit + 's'}
      </Typography>
    </div>
  );
};

RadiusSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
};

export default withStyles(styles)(RadiusSlider);
