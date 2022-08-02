// the main routes of our app are defined here using react-router
// https://reacttraining.com/react-router/web/example/basic

import React from 'react'
import PostList from '../firefly/views/posts/PostList'
import PostNew from '../firefly/views/posts/PostNew'
import Search from '../firefly/views/search/Search'
import Account from '../firefly/views/account/Account'
import PostEdit from '../firefly/views/posts/PostEdit'
import Post from '../firefly/views/posts/Post'
import Error from '../firefly/views/misc/Error'
import Splash from './splash/Splash'
import { Route, Routes } from 'react-router-dom'
import SignIn from './signIn/SignIn'
import PortfolioEdit from './portfolioEdit/PortfolioEdit'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={Splash()} />
    <Route path="/account" element={Account()} />
    <Route path="/signin" element={SignIn()} />
    <Route path="/new-portfolio" element={PortfolioEdit({})} />

    {/* <Route path="/new" children={PostNew()} /> */}
    {/* <Route path="/search" children={Search()} />
    <Route path="/splash" children={Splash()} />
    <Route path="/feed" children={PostList()} /> */}
    {/* <Route path="/signin" children={SignIn()} />
    <Route path="/new-portfolio" children={PortfolioEdit({})} /> */}

    {/* <Route path="/:slug/edit" children={PostEdit()} />
    <Route path="/:slug" children={Post()} /> */}
    {/* <Route children={Error()} /> */}
  </Routes>
)

export default AppRoutes
