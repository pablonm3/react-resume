import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require('bootstrap-loader');
require('font-awesome-webpack-sass');
ReactDOM.render(
  <MuiThemeProvider><App/></MuiThemeProvider>,
  document.getElementById('root')
);
