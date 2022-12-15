import React, { useContext, useEffect, useState } from 'react';

import { FlexCol, FlexRow, Page } from '../../components/layout/styles';
import { signIn } from '../../actions/user/signIn';
import { UserContext } from '../App';
import ProfileCard from '../../components/profileCard/ProfileCard';
import { accountStyles } from './account.styles';
import { List } from 'immutable';
import Tabs from '../../components/tabs/Tabs';
import { profileStyles } from '../profile/styles';
import { useNavigate } from 'react-router-dom';
import FicModel from '../../models/fics/FicModel';
import { getFicsByUserId } from '../../actions/fics/getFics';
import FicList from '../../components/ficList/FicList';
import AccountTab from './accountTab/AccountTab';
import FicEditButton from '../ficEdit/ficEditButton/FicEditButton';

const Account = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [userFics, setUserFics] = useState<List<FicModel>>();

  useEffect(() => {
    getFicsByUserId(user?.userId)?.then((value) => value && setUserFics(value));
  }, [user]);

  if (user) {
    return (
      <Page>
        <FlexRow>
          <ProfileCard button={<FicEditButton />} />
          <FlexCol className={accountStyles.body}>
            <Tabs
              tabLabels={List(['Your Fics', 'Bookmarks', 'Account'])}
              onChange={(index) => setActiveTab(index)}
              className={profileStyles.tabs}
            />
            {activeTab == 0 && <FicList fics={userFics} />}
            {activeTab == 2 && <AccountTab />}
          </FlexCol>
        </FlexRow>
      </Page>
    );
  }
  return (
    <Page>
      <div>
        <p>Log in to see your account</p>
        <button onClick={signIn}>Log in</button>
      </div>
    </Page>
  );
};

export default Account;
