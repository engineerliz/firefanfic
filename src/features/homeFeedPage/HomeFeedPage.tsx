import React, { useEffect, useState } from 'react';
import { FlexRow, View } from '../../components/layout/styles';
import FicList from '../../components/ficList/FicList';
import { List } from 'immutable';
import FicModel from '../../models/fics/FicModel';
import { getAllFics } from '../../actions/fics/getFics';
import Header from '../../components/header/Header';
import { trackPageView } from '../../analytics/analytics';
import HomeBottomBar from '../../components/bottomBar/HomeBottomBar';

const HomeFeedPage = () => {
  const [fics, setFics] = useState<List<FicModel>>();
  useEffect(() => {
    getAllFics().then((value) => value && setFics(value));
    trackPageView('Home Feed');
  }, []);

  return (
    <>
      <Header />
      <View>
        <FlexRow>
          <FicList fics={fics} />
        </FlexRow>
      </View>
      <HomeBottomBar />
    </>
  );
};

export default HomeFeedPage;
