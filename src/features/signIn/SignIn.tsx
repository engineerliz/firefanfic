import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { signIn, signInWithEmailLink } from '../../actions/user/signIn';
import Button from '../../components/button/Button';
import { Heading, Subheading } from '../../components/styles/fonts';
import {
  FlexCol,
  FlexRow,
  gapCss,
  Page,
  widthCss,
} from '../../components/layout/styles';
import FirebaseAuth from '../../firefly/views/misc/FirebaseAuth';
import Header from '../../components/header/Header';
import { FlexCss } from '../../components/styles/flex';
import { trackPageView } from '../../analytics/analytics';
import { css } from '@emotion/css';
import TextInput from '../../components/textInput/TextInput';
import {
  backgroundCss,
  colorCss,
  Colors,
} from '../../components/styles/colors';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    trackPageView('Sign In');
  }, []);

  return (
    <>
      <Header />
      <Page>
        <FlexRow>
          <FlexCol
            className={css(FlexCss.alignStart, gapCss(12), FlexCss.grow(1))}
          >
            <Heading.H18>Welcome to FireFanFic.</Heading.H18>
            <FlexCol className={css(gapCss(6), widthCss('100%'))}>
              <TextInput
                label="Email"
                value={email}
                onChange={(value: string) => setEmail(value)}
              />
              <TextInput
                label="Password"
                value={password}
                hideText
                onChange={(value: string) => setPassword(value)}
              />
              <Subheading.SH12 className={colorCss(Colors.Branding.Red)}>
                {errorMessage}
              </Subheading.SH12>
              <Button
                type="Primary"
                size="Medium"
                onClick={() => {
                  if (email) {
                    signInWithEmailLink(email, window.location.origin).then(
                      () => {
                        navigate('/finish-signin');
                      },
                    );
                  } else {
                    setErrorMessage('Missing email or password');
                  }
                }}
              >
                Sign Up
              </Button>
              <hr className={backgroundCss(Colors.Gray.V7)} />
              <FlexCol className={gapCss(8)}>
                <Button size="Medium">Sign In</Button>
                <FirebaseAuth>
                  {({ isLoading, error, auth }: any) => {
                    if (isLoading) {
                      return '...';
                    }
                    if (error) {
                      return '⚠️ login error';
                    }
                    if (auth) {
                      return <Navigate to="/" />;
                    } else {
                      return (
                        <Button
                          text="Sign In with Google"
                          // type="Primary"
                          size="Medium"
                          width="100%"
                          onClick={() =>
                            signIn().then(() => {
                              navigate(`/`);
                            })
                          }
                        >
                          Sign In with Google
                        </Button>
                      );
                      return <Button onClick={signIn}>Sign In</Button>;
                    }
                  }}
                </FirebaseAuth>
              </FlexCol>
            </FlexCol>
          </FlexCol>
        </FlexRow>
      </Page>
    </>
  );
  // )} />
};

export default SignIn;
