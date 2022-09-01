import React, { useEffect, useState } from 'react';
import { FlexRow, Page } from '../../firefly/styles/layout';
import ProfileCard from '../../components/profileCard/ProfileCard';
import FicList from '../../components/ficList/FicList';
import { List } from 'immutable';
import Fic from '../../models/fics/FicModel';
import { getAllFics } from '../../actions/fics/getFics';

const Splash = () => {
  const [fics, setFics] = useState<List<Fic>>();
  useEffect(() => {
    getAllFics().then((value) => value && setFics(value));
  });

  return (
    <Page>
      <FlexRow>
        <ProfileCard />
        <FicList fics={fics} />
      </FlexRow>
    </Page>
  );
};

export default Splash;
