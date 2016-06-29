import React from 'react';
import ReactDom from 'react-dom';

// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
// const loggerMiddleware = createLogger()
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPosts } from './actions/action.js'
import rootReducer from './reducers/reducer.js'

import configStore from './store/configureStore.js';

import App from './container/Root.js';

// require('file?name=index.html!../index.html');
require("file?name=index.html!../index.html");

const store = configStore();

console.log(store);

store.dispatch(selectSubreddit('reactjs'))

store.dispatch(fetchPosts('reactjs')).then(() =>
  console.log(store.getState())
)
ReactDom.render(
    <App store={store} />,
    document.getElementById('app')
)
