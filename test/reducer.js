import expect from 'expect'

import {selectedSubreddit,posts,postsBySubreddit,setJumpUrl} from '../src/js/reducers/reducer.js'
import {SELECT_SUBREDDIT,selectSubreddit,
            INVALIDATE_SUBREDDIT,invalidateSubreddit,
            REQUEST_POSTS,requestPosts,
            RECEIVE_POSTS,receivePosts
        } from '../src/js/actions/action.js'
// import * as types from '../../constants/ActionTypes'

describe('reducer', () => {

    it('should return init state  (selectedSubreddit)',()=>{
        expect(selectedSubreddit(undefined,{})).toEqual('reactjs')
    })
    it('should return SELECT_SUBREDDIT state  (selectedSubreddit)',()=>{
        let action = selectSubreddit('reactjs')
        expect(selectedSubreddit({},action)).toEqual(action.subreddit)

    })

    it('should return init state  (posts)',()=>{
        expect(posts(undefined,{})).toEqual({
         isFetching: false,
         didInvalidate: false,
         items: []
       })
    })

    it('should return INVALIDATE_SUBREDDIT state  (posts)',()=>{
        let action = invalidateSubreddit('reactjs')
        expect(posts(undefined,action)).toEqual({
         isFetching: false,
         didInvalidate: true,
         items: []
       })
    })
    it('should return REQUEST_POSTS state  (posts)',()=>{
        let action = requestPosts('reactjs')
        expect(posts(undefined,action)).toEqual({
         isFetching: true,
         didInvalidate: false,
         items: []
       })
    })
    it('should return RECEIVE_POSTS state  (posts)',()=>{
        let action = receivePosts('reactjs',{
            data:{
                children:[{data:"test"}]
            }
        })

        Date.now = expect.createSpy().andReturn(Date.now())

        expect(posts(undefined,action)).toEqual({
            isFetching: false,
            didInvalidate: false,
            items: ["test"],
            lastUpdated: Date.now()
       })
    })

    it('should return init state  (postsBySubreddit)',()=>{
        expect(postsBySubreddit(undefined,{})).toEqual({
       })
    })
    it('should return REQUEST_POSTS state  (postsBySubreddit)',()=>{
        let state = {
            reactjs:{
             isFetching: false,
             didInvalidate: true,
             items: []
           }
        }
        let action = invalidateSubreddit('reactjs')
        expect(postsBySubreddit(state,action)).toEqual({
                reactjs:{
                 isFetching: false,
                 didInvalidate: true,
                 items: []
               }
        })
    })

    it('should return REQUEST_POSTS state  (postsBySubreddit)',()=>{
        let state = {
            reactjs:{
             isFetching: false,
             didInvalidate: false,
             items: []
           }
        }
        let action = requestPosts('reactjs')
        expect(postsBySubreddit(state,action)).toEqual({
                reactjs:{
                 isFetching: true,
                 didInvalidate: false,
                 items: []
               }
        })
    })
    it('should return RECEIVE_POSTS state  (postsBySubreddit)',()=>{
        let state = {
            reactjs:{
             isFetching: false,
             didInvalidate: false,
             items: []
           }
        }

        let action = receivePosts('reactjs',{
            data:{
                children:[{data:"test"}]
            }
        })
        Date.now = expect.createSpy().andReturn(Date.now())
        expect(postsBySubreddit(state,action)).toEqual({
                reactjs:{
                    isFetching: false,
                    didInvalidate: false,
                    items: ["test"],
                    lastUpdated: Date.now()
               }
           })
    })




})
