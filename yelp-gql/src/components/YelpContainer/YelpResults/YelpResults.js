import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import YelpResult from './YelpResult/YelpResult';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '70vh',
    overflow: 'scroll'
  }
});

const YelpResults = props => {
  const { classes, total, businesses, toggleFavorite, showFavorites } = props;

  if (!businesses) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="headline">
          Enter Your Zipcode, Select A Radius, And/Or Category To Search
        </Typography>
      </Paper>
    );
  }

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        {total ? (
          businesses.map(b => {
            return (
              <YelpResult
                key={b.id}
                result={b}
                toggleFavorite={() => toggleFavorite(b.id)}
              />
            );
          })
        ) : (
          <Typography variant="headline">
            {showFavorites
              ? 'No Favorites Found. Try Searching And Adding Some.'
              : 'No Businesses Found. Try Searching Again.'}
          </Typography>
        )}
      </Paper>
    </React.Fragment>
  );
};

YelpResults.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  showFavorites: PropTypes.bool.isRequired
};

export default withStyles(styles)(YelpResults);
