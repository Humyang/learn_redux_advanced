import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';

import SecondView from './views/SecondView.jsx';

import DevTools from './DevTools.jsx';

import {Router,Route,hashHistory} from 'react-router'



export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
          <div style={{height:'100%'}}>
            <Router history={hashHistory}>
                      <Route path="/" component={App}></Route>
                      <Route path="/secondview" component={SecondView}></Route>
            </Router>
              <DevTools />
          </div>
      </Provider>
    );
  }
}
