import React from 'react'
import { Route, useNavigate } from 'react-router-dom';

import logOut from '../../firefly/actions/logOut'
import { FlexCol, FlexRow } from '../../firefly/styles/layout';
import { Heading, Subheading } from '../../components/styles/fonts';
import { profileStyles } from './styles';
import Button, { ButtonSize } from '../../components/button/Button';
import { css } from '@emotion/css';
import { FlexCss } from '../../components/styles/flex';
import PortfolioTab from './portfolioTab/PortfolioTab';
import { Colors } from '../../components/styles/colors';

const Profile = ({ auth }: any) => {
  // <Route render={({ history }: any) => (
  const navigate = useNavigate();

  return <FlexCol>
    <FlexRow className={css(profileStyles.profileContainer, FlexCss.alignCenter)}>
      <img
        src={auth.photoURL}
        alt={auth.displayName}
        width="100"
        height="100"
        className={profileStyles.profilePic}
      />
      <FlexCol>
        <Heading.H42>{auth.displayName}</Heading.H42>
        <Subheading.SH22>{auth.email}</Subheading.SH22>
        <Button
          text="Log Out"
          buttonSize={ButtonSize.XSmall}
          className={profileStyles.logoutButton}
          textColor={Colors.White}
          onClick={() => logOut().then(() => navigate(`/`))}
        />
      </FlexCol>
    </FlexRow>
    <PortfolioTab />
  </FlexCol>
  // )} />
}

export default Profile
