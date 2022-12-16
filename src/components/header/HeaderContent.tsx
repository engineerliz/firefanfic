import React from 'react';
import { FlexRow, gapCss } from '../../components/layout/styles';
import { HeaderLink } from '../../firefly/styles/links';
import { headerStyles } from './styles';
import { Heading, Subheading } from '../styles/fonts';
import FirebaseAuth from '../../firefly/views/misc/FirebaseAuth';
import LoveEmoji from '../../assets/illustrations/love-emoji.png';
import CupcakePic from '../../assets/illustrations/cupcake_profile_pic.png';
import { css } from '@emotion/css';
import { useNavigate } from 'react-router';

const HeaderContent = () => {
  const navigate = useNavigate();
  return (
    <FlexRow className={headerStyles.content}>
      <HeaderLink to="/">
        <FlexRow className={css(headerStyles.logoContainer, gapCss(6))}>
          <img src={LoveEmoji} className={headerStyles.emoji} />
          <Heading.H14 className={headerStyles.logoText}>
            FireFanFic
          </Heading.H14>
        </FlexRow>
      </HeaderLink>
      <FirebaseAuth>
        {({ isLoading, error, auth }: any) => {
          if (isLoading) {
            return '...';
          }
          if (error) {
            return '⚠️ login error';
          }
          if (auth) {
            return (
              <img
                src={CupcakePic}
                className={headerStyles.userPicCss}
                onClick={() => navigate('/account')}
              />
            );
          } else {
            return (
              <HeaderLink to={`/signin`}>
                <Subheading.SH14>Sign In</Subheading.SH14>
              </HeaderLink>
            );
          }
        }}
      </FirebaseAuth>
    </FlexRow>
  );
};

export default HeaderContent;
