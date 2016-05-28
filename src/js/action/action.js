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
