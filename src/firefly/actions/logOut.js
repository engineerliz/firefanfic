import Firebase from 'firebase/compat/app'
import ReactGA from 'react-ga'

const logOut = () => {

  ReactGA.event({
    category: 'User',
    action: 'Log out',
  })

  return Firebase.auth().signOut()
}

export default logOut
