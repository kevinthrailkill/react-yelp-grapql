import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import YelpSearch from './YelpSearch/YelpSearch';
import YelpResults from './YelpResults/YelpResults';

import { getYelpBusinesses, toggleFavoriteBusiness } from '../../actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '40px'
  }
});

class YelpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radius: 1,
      zipcode: '',
      validZip: false,
      showFavorites: false,
      category: ''
    };
  }

  handleSearch = () => {
    const { zipcode, radius, category } = this.state;
    this.props.getYelpBusinesses({ zipcode, radius, category });
  };

  handleToggleShowFavorite = () => {
    const showFavorites = this.state.showFavorites;
    this.setState({ ...this.state, showFavorites: !showFavorites });
  };

  handleToggleFavorite = id => {
    this.props.toggleFavoriteBusiness(id);
  };

  handleRadiusChange = (event, radius) => {
    this.setState({ ...this.state, radius });
  };

  handleCategoryChange = event => {
    this.setState({ ...this.state, category: event.target.value });
  };

  handleZipChange = event => {
    const zipcode = event.target.value;

    const validator = RegExp('^[0-9]{5}(?:-[0-9]{4})?$');
    const validZip = validator.test(zipcode);

    this.setState({ zipcode, validZip });
  };

  render() {
    const { classes, businesses, total, favorites } = this.props;
    const { radius, zipcode, validZip, showFavorites, category } = this.state;

    console.log(category);
    return (
      <div className={classes.root}>
        <Grid container spacing={40}>
          <Grid item xs={12} sm={6} md={4}>
            <YelpSearch
              radius={radius}
              radiusChange={this.handleRadiusChange}
              zipChange={this.handleZipChange}
              zipcode={zipcode}
              validZip={validZip}
              search={this.handleSearch}
              toggleFavorites={this.handleToggleShowFavorite}
              showFavorites={showFavorites}
              category={category}
              changeCategory={this.handleCategoryChange}
            />
          </Grid>
          {!showFavorites ? (
            <Grid item xs={12} sm={6} md={8}>
              <YelpResults
                businesses={businesses}
                total={total}
                toggleFavorite={this.handleToggleFavorite}
                showFavorites={showFavorites}
              />
            </Grid>
          ) : (
            <Grid item xs={12} sm={6} md={8}>
              <YelpResults
                businesses={favorites}
                total={favorites.length}
                toggleFavorite={this.handleToggleFavorite}
                showFavorites={showFavorites}
              />
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

YelpContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

// map state to props
const mapStateToProps = ({ yelp }) => {
  const { businesses, total, favorites } = yelp;

  return { businesses, total, favorites };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getYelpBusinesses, toggleFavoriteBusiness }
  )(YelpContainer)
);
