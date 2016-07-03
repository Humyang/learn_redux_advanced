import React from 'react'
import { Router,Route,browserHistory,IndexRoute } from 'react-router'
import App from './containers/App'
// import UserPage from './containers/UserPage'
// import RepoPage from './containers/RepoPage'

import SecondView from './containers/views/SecondView.jsx'
import ThirdlyVIew from './containers/views/ThirdlyVIew.jsx'
import Repos from './containers/views/Repos.js'
import Repo from './containers/views/Repo.js'
import Home from './containers/views/Home.js'


export default (
    <Route path="/"  component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/repos" components={Repos} >
            <Route path="/repos/:userName/:repoName" component={Repo} />
        </Route>

        <Route path="/secondview" component={SecondView} />
        <Route path="/thirdlyview" component={ThirdlyVIew} />
    </Route>
)
