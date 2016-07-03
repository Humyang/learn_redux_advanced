import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';

import SecondView from './views/SecondView.jsx';

import DevTools from './DevTools.jsx';

import {Router,hashHistory,browserHistory,Link} from 'react-router'

import routes from '../routes.js'

export default class Root extends Component {
  render() {
    const { store } = this.props;
    console.log(routes);
    return (
      <Provider store={store}>
          <div >
            <Router history={browserHistory} routes={routes} />
              <DevTools />
          </div>
      </Provider>
    );
  }
}
