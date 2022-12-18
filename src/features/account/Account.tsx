import React, { useContext, useEffect } from 'react';

import { FlexCol, Page, View } from '../../components/layout/styles';
import { signIn } from '../../actions/user/signIn';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import logOut from '../../firefly/actions/logOut';
import { trackPageView } from '../../analytics/analytics';

const Account = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    trackPageView('Account');
  }, []);

  if (user) {
    return (
      <>
        <Header />
        <View>
          <FlexCol>
            <Button
              size="Medium"
              onClick={() => {
                logOut().then(() => {
                  navigate('/');
                  clearUser();
                });
              }}
            >
              Log Out
            </Button>
          </FlexCol>
        </View>
      </>
    );
  }
  return (
    <Page>
      <div>
        <p>Log in to see your account</p>
        <button onClick={signIn}>Log in</button>
      </div>
    </Page>
  );
};

export default Account;
