import React from 'react'

import signIn from '../../../actions/user/signIn'
import FirebaseAuth, { AuthState } from '../misc/FirebaseAuth'
import Error from '../misc/Error'
import Profile from '../../../features/profile/Profile'
import {
  Page,
} from '../../styles/layout'

const Account = () => (
  <Page>
    <FirebaseAuth>
      {({ isLoading, error, auth }: AuthState) => {

        if (isLoading) {
          return <p>loading...</p>
        }

        if (error) {
          // return <Error error={error} />
        }

        if (!auth) {
          return <div>
            <p>Log in to see your account</p>
            <button onClick={signIn}>Log in</button>
          </div>
        }

        return <div>
          <Profile
            user={auth}
          />
          {/* <hr /> */}
          {/* <Subscription auth={auth} /> */}
        </div>

      }}
    </FirebaseAuth>
  </Page>
)

export default Account
