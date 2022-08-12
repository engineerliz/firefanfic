import React, { useContext, useEffect, useState } from 'react'

import FirebaseAuth, { AuthState } from '../misc/FirebaseAuth'
import Error from '../misc/Error'
import Profile from '../../../features/profile/Profile'
import {
  Page,
} from '../../styles/layout'
import { signIn } from '../../../actions/user/signIn'
import { useCurrentUserContext } from '../../../context/state'
import { SodaUser } from '../../../models/user/UserModel'
import { getCurrentUser, getCurrentUserId } from '../../../actions/user/getUser'
import { UserContext } from '../../../features/App'

const Account = () => {
  const userContext = useContext(UserContext);

  const [currentUserId, setCurrentUserId] = useState<string | undefined>();
  // const [user, setUser] = useState<SodaUser | undefined>();
  useEffect(() => {
    // setCurrentUserId(getCurrentUserId())
  }, [])
  useEffect(() => {
    // getCurrentUser()?.then(value => setUser(value ?? undefined))
  }, [currentUserId])

  // console.log('userContext', userContext);

  if (userContext.user) {
    return (
      <Page>
        <div>
          <Profile
            user={userContext.user}
          />
          {/* <hr /> */}
          {/* <Subscription auth={auth} /> */}
        </div>
      </Page>
    )
  }
  return (
    <Page>
      <div>
        <p>Log in to see your account</p>
        <button onClick={signIn}>Log in</button>
      </div>
    </Page>
  )
}

export default Account
