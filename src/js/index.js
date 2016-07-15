import React from 'react';
import ReactDom from 'react-dom';

// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
// const loggerMiddleware = createLogger()
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPosts } from './actions/action.js'
import rootReducer from './reducers/reducer.js'

import configStore from './store/configureStore.js';

import Root from './containers/Root.js';

import {browserHistory} from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux'

require("file?name=index.html!../index.html");

require('../css/index.css');

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__

const store = configStore(initialState);

const history = syncHistoryWithStore(browserHistory, store)
ReactDom.render(
    <Root store={store} history={history}/>,
    document.getElementById('app')
)

store.dispatch(selectSubreddit('reactjs'))

store.dispatch(fetchPosts('reactjs')).then(() =>
  console.log(store.getState())
)
