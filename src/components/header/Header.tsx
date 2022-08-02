import React from 'react';
import { FlexRow } from '../../firefly/styles/layout';
import { HeaderLink } from '../../firefly/styles/links';
import { containerCss, contentContainerCss, userPicCss, waveCss } from './styles';
import Wave from '../../../assets/wave.png';
import { Heading, Subheading } from '../styles/fonts';
import FirebaseAuth from '../../firefly/views/misc/FirebaseAuth';
import logIn from '../../firefly/actions/logIn';
import { FlexCss } from '../styles/flex';

interface HeaderProps {
  auth: any;
}

const Header = (props: HeaderProps) => {
  return (
    <div className={containerCss} >
      {/* <img src={Wave} className={waveCss} /> */}
      <FlexRow className={contentContainerCss}>
        <HeaderLink to="/"><Heading.H22>Juicebox</Heading.H22></HeaderLink>
        <FirebaseAuth>
          { ({isLoading, error, auth}: any) => {
            if (isLoading) {
              return '...'
            }
            if (error) {
              return '⚠️ login error'
            }
            if (auth) {
              return (
                <HeaderLink to={`/account`}>
                  <FlexRow className={FlexCss.alignCenter}>
                    <img 
                      src={auth.photoURL} 
                      alt={auth.displayName} 
                      width="40" 
                      height="40" 
                      className={userPicCss}
                    />
                    <Subheading.SH18>Hi, {auth.displayName}</Subheading.SH18>
                  </FlexRow>
                </HeaderLink>
              );
            } else {
              return <button onClick={logIn}>log in</button>
            }
          }}
        </FirebaseAuth>
      </FlexRow>
    </div>
  )
}

export default Header;