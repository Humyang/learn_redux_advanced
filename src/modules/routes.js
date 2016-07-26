import React from 'react'
import { Route,IndexRoute } from 'react-router'
import App from '../js/containers/App'
// import UserPage from './containers/UserPage'
// import RepoPage from './containers/RepoPage'

import SecondView from '../js/containers/views/SecondView.jsx'
import ThirdlyVIew from '../js/containers/views/ThirdlyVIew.jsx'
import Repos from '../js/containers/views/Repos.js'
import Repo from '../js/containers/views/Repo.js'
import Home from '../js/containers/views/Home.js'
import Tabs from '../js/containers/views/tabs/Tabs.jsx'

import WordList from '../js/containers/views/WordList/WordList.js'

export default (
    <Route path="/"  component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/repos" components={Repos} >
            <Route path="/repos/:userName/:repoName" component={Repo} />
        </Route>
        <Route path="/tabs" component={Tabs} >
            <Route path="/tabs/wordlist" component={WordList} />
        </Route>
        <Route path="/secondview" component={SecondView} />
        <Route path="/thirdlyview" component={ThirdlyVIew} />
    </Route>
)
