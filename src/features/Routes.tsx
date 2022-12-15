// the main routes of our app are defined here using react-router
// https://reacttraining.com/react-router/web/example/basic

import React from 'react'
import Account from './account/Account';
import Splash from './splash/Splash'
import { Route, Routes } from 'react-router-dom'
import SignIn from './signIn/SignIn'
import PortfolioEdit from './portfolioEdit/PortfolioEdit';
import EditProfile from './profile/editProfile/EditProfile'
import FicPage from './ficPage/FicPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Splash />} />
    <Route path="/account" element={<Account />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/edit-portfolio" element={<PortfolioEdit />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/edit-profile" element={<EditProfile />} />
    <Route path="/fic/:ficId" element={<FicPage />} />
  </Routes>
);

export default AppRoutes
