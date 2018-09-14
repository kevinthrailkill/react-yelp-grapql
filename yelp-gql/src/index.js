import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  headers: {
    Authorization:
      'Bearer zZcR-ZhvOyXrlHQ1nCuPxQMdFXTjolxR4JWxua-Rq4geBcFklVuTA2fOuj04Jghi7gbIka7PUOmIFignaXFSBLkzzrbA--qxXmGYbYvt8Nn1052tlNPTFHDC-bb3WXYx',
    'Content-Type': 'application/graphql'
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
