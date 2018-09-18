import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FontAwesome from 'react-fontawesome';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit * 2,
    flexGrow: 1,
    color: theme.palette.text.secondary,
    marginBottom: '30px',
    textAlign: 'left'
  },
  favorite: {
    color: theme.palette.primary.main
  }
});

const YelpResult = props => {
  const { classes, result, toggleFavorite } = props;

  return (
    <Paper className={classes.paper}>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={16}>
          <Grid item xs>
            <Typography gutterBottom variant="headline">
              {result.name}
            </Typography>
            <Typography gutterBottom>
              {result.location.formatted_address}
            </Typography>
            <Typography gutterBottom>
              Rating: {result.rating} Review Count: {result.review_count}
            </Typography>
            <Typography gutterBottom>
              Review Count: {result.review_count}
            </Typography>
            <Typography gutterBottom>
              {result.display_phone ? result.display_phone : null}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom>
              <FontAwesome
                className={result.favorite ? classes.favorite : ''}
                style={{ cursor: 'pointer' }}
                onClick={toggleFavorite}
                name="star"
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subheading">{result.price}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

YelpResult.propTypes = {
  classes: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default withStyles(styles)(YelpResult);
