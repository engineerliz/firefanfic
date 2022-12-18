// the main routes of our app are defined here using react-router
// https://reacttraining.com/react-router/web/example/basic

import React from 'react'
import Account from './account/Account';
import { Route, Routes } from 'react-router-dom';
import SignIn from './signIn/SignIn';
import PortfolioEdit from './portfolioEdit/PortfolioEdit';
import EditProfile from './profilePage/editProfile/EditProfile';
import FicPage from './ficPage/FicPage';
import AddChapterPage from './addChapterPage/AddChapterPage';
import ChapterPage from './chapterPage/ChapterPage';
import ProfilePage from './profilePage/ProfilePage';
import AddFicPage from './addFicPage/AddFicPage';
import HomeFeedPage from './homeFeedPage/HomeFeedPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeFeedPage />} />
    <Route path="/account" element={<Account />} />
    <Route path="/profile/:username" element={<ProfilePage />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/edit-profile" element={<EditProfile />} />
    <Route path="/fic/:slug" element={<FicPage />} />
    <Route path="/add-chapter/:ficId" element={<AddChapterPage />} />
    <Route path="/fic/:slug/:chapterIndex" element={<ChapterPage />} />
    <Route path="/new-fic" element={<AddFicPage />} />
  </Routes>
);

export default AppRoutes
