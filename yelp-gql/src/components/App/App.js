import React, { Component } from 'react';

import YelpHeader from '../YelpHeader/YelpHeader';
import YelpContainer from '../YelpContainer/YelpContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <YelpHeader />
        <YelpContainer />
      </React.Fragment>
    );
  }
}

export default App;
