import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import categories from './categories';

const styles = {
  root: {
    width: '90%',
    paddingBottom: '40px'
  },
  select: {
    width: '100%'
  }
};

const CategorySelector = props => {
  const { classes, category, changeCategory } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subheading">Select A Category</Typography>
      <FormControl className={classes.select}>
        <Select value={category} onChange={changeCategory}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map(cat => {
            return (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

CategorySelector.propTypes = {
  classes: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired
};

export default withStyles(styles)(CategorySelector);
