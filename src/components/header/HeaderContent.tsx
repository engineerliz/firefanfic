import React, { useContext } from 'react';
import { FlexRow, gapCss } from '../../components/layout/styles';
import { HeaderLink } from '../../firefly/styles/links';
import { headerStyles } from './styles';
import { Heading } from '../styles/fonts';
import FirebaseAuth, { AuthState } from '../../firefly/views/misc/FirebaseAuth';
import LoveEmoji from '../../assets/illustrations/love-emoji.png';
import CupcakePic from '../../assets/illustrations/cupcake_profile_pic.png';
import { css } from '@emotion/css';
import { useNavigate } from 'react-router';
import { UserContext } from '../../features/App';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import { FlexCss } from '../styles/flex';

interface HeaderContentProps {
  rightButton?: React.ReactNode;
}

const HeaderContent = ({ rightButton }: HeaderContentProps) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

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
                <img
                  src={CupcakePic}
                  className={headerStyles.userPicCss}
                  onClick={() => navigate(`/profile/${user.username}`)}
                />
              );
            } else {
              return (
                <Button onClick={() => navigate('/signin')}>
                  <FlexRow className={css(gapCss(2), FlexCss.alignCenter)}>
                    <Icon icon="happyEmoji" />
                    Sign In
                  </FlexRow>
                </Button>
              );
            }
          }}
        </FirebaseAuth>
      )}
    </FlexRow>
  );
};

export default HeaderContent;
