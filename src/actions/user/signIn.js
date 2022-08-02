import Firebase from 'firebase/app'
import ReactGA from 'react-ga'
import { prepareDocForCreate } from '../../firefly/actions/helpers/firestoreHelpers'

const signIn = () => {
  console.log('sign in')
  ReactGA.event({
    category: 'User',
    action: 'Log in',
  })

  let provider = new Firebase.auth.GoogleAuthProvider()

  return Firebase.auth()
    .signInWithRedirect(provider)
    .then(result => {
      console.log(`logged in as ${result.user.displayName}`)
      Firebase.firestore()
        .collection('users')
        .add(prepareDocForCreate())
        .then()
        .catch(error => {
          alert(`Whoops, couldn't create the user: ${error.message}`)
        })
    }).catch(error => {
      console.error('could not sign in', error)
    })
}

export default signIn
