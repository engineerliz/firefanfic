// the main routes of our app are defined here using react-router
// https://reacttraining.com/react-router/web/example/basic

import React from 'react'
import Account from './account/Account';
import Splash from './splash/Splash'
import { Route, Routes } from 'react-router-dom'
import SignIn from './signIn/SignIn'
import PortfolioEdit from './portfolioEdit/PortfolioEdit';
import EditProfile from './profilePage/editProfile/EditProfile';
import FicPage from './ficPage/FicPage';
import AddChapterPage from './addChapter/AddChapterPage';
import ChapterPage from './chapterPage/ChapterPage';
import ProfilePage from './profilePage/ProfilePage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Splash />} />
    <Route path="/account" element={<Account />} />
    <Route path="/profile/:username" element={<ProfilePage />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/edit-portfolio" element={<PortfolioEdit />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/edit-profile" element={<EditProfile />} />
    <Route path="/fic/:slug" element={<FicPage />} />
    <Route path="/add-chapter/:ficId" element={<AddChapterPage />} />
    <Route path="/fic/:slug/:chapterIndex" element={<ChapterPage />} />
  </Routes>
);

export default AppRoutes
