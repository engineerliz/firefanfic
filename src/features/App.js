import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

import { serverTimestamp } from "firebase/firestore"
import { FirestoreProvider } from '@react-firebase/firestore'
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Layout from '../components/layout/Layout'
import '../firefly/styles/global'
import { transformFirebaseUsertoSodaUser } from '../models/user/UserModel'
import { getUserById } from '../actions/user/getUser';

const userInfo = {
  user: {
    userId: '',
    displayName: '',
    email: undefined,
    username: '',
    joinDate: serverTimestamp(),
    avatarUrl: undefined,
  }, 
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clearUser: () => {},
}
export const UserContext = React.createContext(userInfo);

const App = () => {
  const [currentUser, setCurrentUser] = useState()
  const clearUser = () => setCurrentUser(undefined);
  useEffect(() => {
    Firebase.auth().onAuthStateChanged(
      (user) => user?.uid && getUserById(user?.uid).then((user) => setCurrentUser(user)));
  }, [])

  return <FirestoreProvider firebase={Firebase} >
    <UserContext.Provider value={{
      user: currentUser,
      clearUser,
    }}>
      <BrowserRouter>
        {/* <ErrorBoundary> */}
        <Layout>
          {/* <Routes>
            <Route path="/" children={ScrollToTop} />
            <Route path="/" children={Analytics({})} />
          </Routes> */}
          <Routes />
          {/* {Routes()} */}
        </Layout>
        {/* </ErrorBoundary> */}
      </BrowserRouter>
    </UserContext.Provider>
  </FirestoreProvider>
}

// scroll to top on route change
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md#scroll-to-top
// export class ScrollToTop extends React.Component {
//   componentDidUpdate(prevProps) {
//     if (this.props.location !== prevProps.location) {
//       window.scrollTo(0, 0)
//     }
//   }
//   render() {
//     return <></>
//   }
// }

// // Track Google Analytics page view for every route
// // https://github.com/react-ga/react-ga/issues/122#issuecomment-319546248
// const Analytics = ({ location }) => {
//   const page = location.pathname + location.search
//   ReactGA.set({ page })
//   ReactGA.pageview(page)
//   return null
// }

export default App
