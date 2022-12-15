import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { signIn } from '../../actions/user/signIn';
import Button from '../../components/button/Button';
import { Heading } from '../../components/styles/fonts';
import { FlexCol, FlexRow, Page } from '../../components/layout/styles';
import FirebaseAuth from '../../firefly/views/misc/FirebaseAuth';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <FlexRow>
        <FlexCol>
          {/* <Heading.H52>Welcome to FireFanFic.</Heading.H52> */}
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
                    size="Large"
                    type="Primary"
                    width="fit-content"
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
      </FlexRow>
    </Page>
  );
  // )} />
};

export default SignIn;
