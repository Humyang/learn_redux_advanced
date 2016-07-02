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


require("file?name=index.html!../index.html");

const store = configStore();

console.log(store);

store.dispatch(selectSubreddit('reactjs'))

store.dispatch(fetchPosts('reactjs')).then(() =>
  console.log(store.getState())
)
ReactDom.render(
    <Root store={store} />,
    document.getElementById('app')
)
