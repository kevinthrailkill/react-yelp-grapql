import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import RadiusSlider from '../../helpers/RadiusSlider/RadiusSlider';
import CategorySelector from '../../helpers/CategorySelector/CategorySelector';
import ZipcodeInput from '../../helpers/ZipcodeInput/ZipcodeInput';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

const YelpSearch = props => {
  const {
    classes,
    radiusChange,
    radius,
    zipChange,
    zipcode,
    validZip,
    search,
    showFavorites,
    toggleFavorites,
    category,
    changeCategory
  } = props;

  return (
    <Paper className={classes.paper}>
      {!showFavorites ? (
        <React.Fragment>
          <ZipcodeInput
            handleChange={zipChange}
            zipcode={zipcode}
            validZip={validZip}
          />
          <RadiusSlider
            value={radius}
            min={1}
            max={24}
            step={1}
            handleChange={radiusChange}
            unit="Mile"
          />
          <CategorySelector
            category={category}
            changeCategory={changeCategory}
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={toggleFavorites}
          >
            Show Favorites
          </Button>
          <Button
            variant="contained"
            disabled={!validZip}
            color="primary"
            className={classes.button}
            onClick={search}
          >
            Search Yelp
          </Button>
        </React.Fragment>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={toggleFavorites}
        >
          Back To Search
        </Button>
      )}
    </Paper>
  );
};

YelpSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  radiusChange: PropTypes.func.isRequired,
  radius: PropTypes.number.isRequired,
  zipChange: PropTypes.func.isRequired,
  zipcode: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
  showFavorites: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired
};

export default withStyles(styles)(YelpSearch);
