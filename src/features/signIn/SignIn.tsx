import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import signIn from '../../actions/user/signIn';
import Button from '../../components/button/Button';
import { Heading } from '../../components/styles/fonts';
import { globalContext } from '../../context';
import { FlexCol, FlexRow, Page } from '../../firefly/styles/layout';
import FirebaseAuth from '../../firefly/views/misc/FirebaseAuth';

const SignIn = () => {
  const { globalState, dispatch } = useContext(globalContext);
  console.log('globalState', globalState);
  return <Route render={({ history }: any) => (
    <Page>
      <FlexRow>
        <FlexCol>
          <Heading.H52>
            Let’s get your account setup.
          </Heading.H52>
          <FirebaseAuth>
            {({ isLoading, error, auth }: any) => {
              if (isLoading) {
                return '...'
              }
              if (error) {
                return '⚠️ login error'
              }
              if (auth) {
                return (
                  <Redirect to="/" />

                );
              } else {
                return <Button
                  text="Sign In with Google"
                  width="fit-content"
                  onClick={() => signIn().then(() => {
                    console.log('happening?')
                    dispatch({ type: 'SET_USER', payload: auth });

                    history.push(`/`)
                  })}
                />
                // return <Button onClick={signIn} text="Log In" buttonSize={ButtonSize.XSmall}/>
              }
            }}
          </FirebaseAuth>

        </FlexCol>
      </FlexRow>
    </Page>
  )} />
}

export default SignIn