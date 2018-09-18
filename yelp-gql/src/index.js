import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './components/helpers/Theme';
import store from './store';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
