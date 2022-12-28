import React, { useContext, useEffect, useState } from 'react';
import Firebase from 'firebase/compat/app';
import {
  finishSignInWithEmailLink,
  isSignInWithEmailLink,
} from '../../actions/user/signIn';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import { FlexCol, gapCss, View } from '../../components/layout/styles';
import { Heading, Subheading } from '../../components/styles/fonts';
import { useNavigate } from 'react-router';
import TextInput from '../../components/textInput/TextInput';
import { UserContext } from '../App';

const CompleteOnboardingView = () => {
  const { refreshUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    if (isSignInWithEmailLink()) {
      const localEmail = window.localStorage.getItem('emailForSignIn');
      if (localEmail) {
        setEmail(localEmail);
      }
    }
  }, []);

  return (
    <>
      <Header />
      {isSignInWithEmailLink() ? (
        <View>
          <FlexCol className={gapCss(8)}>
            <Heading.H22>Email confirmed 👌</Heading.H22>
            <TextInput
              value={email}
              label="Email"
              onChange={(value: string) => setEmail(value)}
            />
            <Button
              type="Primary"
              size="Medium"
              onClick={() => {
                finishSignInWithEmailLink(email).then(() => {
                  window.localStorage.removeItem('emailForSignIn');
                  refreshUser();
                  navigate('/');
                });
              }}
            >
              Finish Signing In
            </Button>
          </FlexCol>
        </View>
      ) : (
        <View>
          <Heading.H22>Please check your email for a sign in link.</Heading.H22>
        </View>
      )}
    </>
  );
};

export default CompleteOnboardingView;
