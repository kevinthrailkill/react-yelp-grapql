import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class App extends Component {
  render() {
    // query is now a GraphQL syntax tree object
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const query = gql`
  {
    search(radius: 40000, location: "94550", categories: "bars") {
      total
      business {
        name
        rating
        review_count
        location {
          address1
          city
          state
          country
          postal_code
        }
      }
    }
  }
`;

export default graphql(query)(App);
