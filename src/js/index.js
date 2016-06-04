import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPosts } from './actions/action.js'
import rootReducer from './reducers/reducer.js'

// require('file?name=index.html!../index.html');
require("file?name=index.html!../index.html");

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(selectSubreddit('reactjs'))
// store.dispatch(fetchPosts('reactjs')).then(() =>
//   console.log(store.getState())
// )

store.dispatch(fetchPosts('reactjs')).then(() =>
  console.log(store.getState())
)
