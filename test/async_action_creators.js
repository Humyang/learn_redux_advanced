import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {fetchPosts,RECEIVE_POSTS,REQUEST_POSTS} from '../src/js/actions/action.js'
// import * as types from '../../constants/ActionTypes'
import nock from 'nock'
import expect from 'expect' // You can use any testing library

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })


 it('create RECEIVE_POSTS when fetching posts has been done',()=>{
     let subreddit = 'reactjs'
     let json = { "kind": "Listing",
         "data":{
         "children":[{"data":"test"}]
     }}

    /*
    模拟 http 服务
    劫持 ajax 地址返回模拟数据
    */
    nock(`http://www.reddit.com/`)
    .get(`/r/${subreddit}.json`)
    .reply(200,json)


    Date.now = expect.createSpy().andReturn(Date.now())

     const expectedActions = [
         {
             type:REQUEST_POSTS,
             subreddit
         },
         {
             type:RECEIVE_POSTS,
             subreddit,
             posts:json.data.children.map(child=>child.data),
             receivedAt:Date.now()
         }
     ]

     /*模拟 store，使用 redux-mock-store*/
     const store = mockStore({  })

     return store.dispatch(fetchPosts(subreddit))
       .then(() => { // return of async actions
         expect(store.getActions()).toEqual(expectedActions)
       })
 })



  // it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
  //   nock('http://example.com/')
  //     .get('/todos')
  //     .reply(200, { body: { todos: ['do something'] }})
  //
  //   const expectedActions = [
  //     { type: types.FETCH_TODOS_REQUEST },
  //     { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something']  } }
  //   ]
  //   const store = mockStore({ todos: [] })
  //
  //   return store.dispatch(actions.fetchTodos())
  //     .then(() => { // return of async actions
  //       expect(store.getActions()).toEqual(expectedActions)
  //     })
  // })
})
