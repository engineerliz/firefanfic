import React, { useContext } from 'react';
import { FlexRow, gapCss } from '../../components/layout/styles';
import { HeaderLink } from '../../firefly/styles/links';
import { headerStyles } from './styles';
import { Subheading, Title } from '../styles/fonts';
import FirebaseAuth, { AuthState } from '../../firefly/views/misc/FirebaseAuth';
import LoveEmoji from '../../assets/illustrations/love-emoji.png';
import CupcakePic from '../../assets/illustrations/cupcake_profile_pic.png';
import { css } from '@emotion/css';
import { UserContext } from '../../features/App';
import Icon from '../icon/Icon';
import { FlexCss } from '../styles/flex';
import { Link } from 'react-router-dom';

interface HeaderContentProps {
  rightButton?: React.ReactNode;
}

const HeaderContent = ({ rightButton }: HeaderContentProps) => {
  const { user } = useContext(UserContext);

  return (
    <FlexRow className={headerStyles.content}>
      <HeaderLink to="/">
        <FlexRow className={css(headerStyles.logoContainer, gapCss(6))}>
          <img src={LoveEmoji} className={headerStyles.emoji} />
          <Title.T14 className={headerStyles.logoText}>FireFanFic</Title.T14>
        </FlexRow>
      </HeaderLink>
      {rightButton ?? (
        <FirebaseAuth>
          {({ isLoading, error, auth }: AuthState) => {
            if (isLoading) {
              return '...';
            }
            if (error) {
              return '⚠️ login error';
            }
            if (auth) {
              return (
                <Link
                  to={`/profile/${user?.username}`}
                  className={FlexCss.flex}
                >
                  <img src={CupcakePic} className={headerStyles.userPicCss} />
                </Link>
              );
            } else {
              return (
                <Link to="/signin" className={FlexCss.flex}>
                  <FlexRow className={css(gapCss(2), FlexCss.alignCenter)}>
                    <Icon icon="happyEmoji" />
                    <Subheading.SH14>Sign In</Subheading.SH14>
                  </FlexRow>
                </Link>
              );
            }
          }}
        </FirebaseAuth>
      )}
    </FlexRow>
  );
};

export default HeaderContent;
