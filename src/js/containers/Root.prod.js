import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';
import {Router,browserHistory} from 'react-router'
import routes from '../routes'
export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}
