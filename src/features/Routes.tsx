// the main routes of our app are defined here using react-router
// https://reacttraining.com/react-router/web/example/basic

import React from 'react'
// import { Switch, Route } from 'react-router-dom'

import PostList from '../firefly/views/posts/PostList'
import PostNew from '../firefly/views/posts/PostNew'
import Search from '../firefly/views/search/Search'
import Account from '../firefly/views/account/Account'
import PostEdit from '../firefly/views/posts/PostEdit'
import Post from '../firefly/views/posts/Post'
import Error from '../firefly/views/misc/Error'
import Splash from './splash/Splash'
import { Route, Switch } from 'react-router'
import SignIn from './signIn/SignIn'
import PortfolioEdit from './portfolioEdit/PortfolioEdit'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Splash} />
    <Route path="/new" component={PostNew} />
    <Route path="/search" component={Search} />
    <Route path="/splash" component={Splash} />
    <Route exact path="/feed" component={PostList} />
    <Route path="/signin" component={SignIn} />
    <Route path="/new-portfolio" component={PortfolioEdit} />

    <Route path="/account" component={Account} />
    <Route path="/:slug/edit" component={PostEdit} />
    <Route path="/:slug" component={Post} />
    <Route component={Error} />
  </Switch>
)

export default Routes
