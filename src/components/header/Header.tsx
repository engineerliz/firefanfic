import React from 'react';
import { FlexRow } from '../../firefly/styles/layout';
import { HeaderLink } from '../../firefly/styles/links';
import { headerStyles } from './styles';
import { Heading, Subheading } from '../styles/fonts';
import FirebaseAuth from '../../firefly/views/misc/FirebaseAuth';

const Header = () => {
  return (
    <div className={headerStyles.containerCss}>
      <FlexRow className={headerStyles.contentContainerCss}>
        <HeaderLink to="/">
          <FlexRow className={headerStyles.logoContainer}>
            <Heading.H18 className={headerStyles.logoText}>
              FireFanFic
            </Heading.H18>
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
                <HeaderLink to={`/account`}>
                  <Subheading.SH14>Hi, {auth.displayName}</Subheading.SH14>
                </HeaderLink>
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
    </div>
  );
};

export default Header;
