import React, { useContext, useEffect, useState } from 'react';

import { FlexCol, FlexRow, gapCss, Page } from '../../components/layout/styles';
import { signIn } from '../../actions/user/signIn';
import { UserContext } from '../App';
import { List } from 'immutable';
import { useNavigate } from 'react-router-dom';
import FicModel from '../../models/fics/FicModel';
import { getFicsByUserId } from '../../actions/fics/getFics';
import FicList from '../../components/ficList/FicList';
import Header from '../../components/header/Header';
import CupcakePic from '../../assets/illustrations/cupcake_profile_pic.png';
import IconButton from '../../components/iconButton/IconButton';
import { Heading } from '../../components/styles/fonts';
import { profileStyles } from './styles';
import { useParams } from 'react-router';
import { SodaUser } from '../../models/user/UserModel';
import { getUserByUsername } from '../../actions/user/getUser';
import Icon from '../../components/icon/Icon';
import BottomBar from '../../components/bottomBar/BottomBar';
import Button from '../../components/button/Button';
import { css } from '@emotion/css';
import { FlexCss } from '../../components/styles/flex';

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const { username } = useParams();
  const navigate = useNavigate();
  const [isMyProfile, setIsMyProfile] = useState<boolean>(false);
  const [userFics, setUserFics] = useState<List<FicModel>>();
  const [userProfile, setUserProfile] = useState<SodaUser>();

  useEffect(() => {
    if (user.username === username) {
      setIsMyProfile(true);
      setUserProfile(user);
    } else {
      getUserByUsername(username).then(
        (userValue) => userValue && setUserProfile(userValue),
      );
    }
  }, []);
  useEffect(() => {
    getFicsByUserId(userProfile?.userId)?.then(
      (value) => value && setUserFics(value),
    );
  }, [userProfile]);

  if (userProfile) {
    return (
      <>
        <Header
          rightButton={
            isMyProfile ? (
              <IconButton icon="user" onClick={() => navigate('/account')} />
            ) : undefined
          }
        >
          <FlexCol className={gapCss(8)}>
            <img src={CupcakePic} className={profileStyles.profilePic} />
            <Heading.H14>{userProfile.username}</Heading.H14>
          </FlexCol>
        </Header>
        <Page>
          <FlexRow>
            <FicList fics={userFics} />
          </FlexRow>
        </Page>
        <BottomBar>
          <Button onClick={() => navigate('/new-fic')}>
            <FlexRow className={css(gapCss(2), FlexCss.alignCenter)}>
              <Icon icon="plus" />
              New Fic
            </FlexRow>
          </Button>
        </BottomBar>
      </>
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

export default ProfilePage;
