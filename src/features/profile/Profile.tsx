import React from 'react'
import { Route } from 'react-router-dom';

import logOut from '../../firefly/actions/logOut'
import { FlexCol, FlexRow } from '../../firefly/styles/layout';
import { Heading, Subheading } from '../../components/styles/fonts';
import { profileStyles } from './styles';
import Button, { ButtonSize } from '../../components/button/Button';
import { css } from '@emotion/css';
import { FlexCss } from '../../components/styles/flex';
import PortfolioTab from './portfolioTab/PortfolioTab';

const Profile = ({auth}: any) => (
  <Route render={({history}: any) => (
    <FlexCol>
      <FlexRow className={css(profileStyles.profileContainer, FlexCss.alignCenter)}>
        <img 
          src={auth.photoURL} 
          alt={auth.displayName} 
          width="126" 
          height="126" 
          className={profileStyles.profilePic}
        />
        <FlexCol>
          <Heading.H52>{auth.displayName}</Heading.H52>
          <Subheading.SH22>{auth.email}</Subheading.SH22>
          <Button 
            text="log out"
            buttonSize={ButtonSize.XSmall}
            width={120}
            onClick={() => logOut().then( () => history.push(`/`)) }
          />
        </FlexCol>
      </FlexRow>
      <PortfolioTab />
    </FlexCol>
  )} />
)

export default Profile
