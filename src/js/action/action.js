export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export function selectSubreddit(subreddit){
    return {
        type:SELECT_SUBREDDIT,
        subreddit
    }
}


// when press a "refresh" button to update it
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit(subreddit){
    return {
        type:INVALIDATE_SUBREDDIT,
        subreddit
    }
}




// when it's time to fetch the posts for some subreddit,we will dispatch a REQUEST_POSTS action
export const REQUEST_POSTS = 'REQUEST_POSTS'
export function requestPosts(subreddit){
    return {
        type:REQUEST_POSTS,
        subreddit
    }
}

// when the network request comes through,we will dispatch RECEIVE_POSTS

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export function receivePosts(subreddit,json){
    return {
        type:RECEIVE_POSTS,
        subreddit,
        posts:json.data.children.map(child=>child.data),
        receivedAt:Date.now()
    }
}

// 我们的第一个 thunk action creator
// 尽管与其他的 creator 不一样，但你可以像其他 creator 一样使用：
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts(subreddit){

//Thunk 中间件知道如何处理返回的 function。
// 他会传递 dispatch 给返回的方法
// 因此返回的方法自己可以 dispatch action。

    return function(dispatch){

        // 第一个 dispatch：通知应用程序状态需要更新
        // 这 API 的调用表明开始执行操作
        dispatch(requestPosts(subreddit));

        // thunk 中间件调用的这个方法可以返回值，
        // 他会被传递作为dispatch 方法的返回值

        // 在这个例子，我们返回 promise 。
        // 这里可以不适用 thunk 中间件，但他为我们提供便利。

        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json=>

                // 我们可以 dispatch 多次
                // 这里，我们更新 app state 为 API 调用返回的结果
                dispatch(receivePosts(subreddit,json))
            )


    }
}
