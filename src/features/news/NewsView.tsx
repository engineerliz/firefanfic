import React from 'react';
import HomeBottomBar from '../../components/bottomBar/HomeBottomBar';
import Header from '../../components/header/Header';
import { View } from '../../components/layout/styles';
import { Title } from '../../components/styles/fonts';

const NewsView = () => {
  return (
    <>
      <Header />
      <View>
        <Title.T18>News</Title.T18>
      </View>
      <HomeBottomBar />
    </>
  );
};

export default NewsView;
