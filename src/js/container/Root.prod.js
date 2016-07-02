import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';
import {Router,hashHistory} from 'react-router'
import routes from '../routes'
export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
      </Provider>
    );
  }
}
