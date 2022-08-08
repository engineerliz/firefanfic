import Firebase, { User } from 'firebase/app'
import randomWords from 'random-words'
import ReactGA from 'react-ga'
import slugify from 'slugify'
import SodaUser from '../../models/user/UserModel'

export const signIn = () => {
  console.log('sign in')
  ReactGA.event({
    category: 'User',
    action: 'Log in',
  })

  let provider = new Firebase.auth.GoogleAuthProvider()

  return Firebase.auth()
    .signInWithPopup(provider)
    .then(async value => {
      await addUser(value.user ?? undefined)
    }).catch(error => {
      console.error('could not sign in', error)
    })
}

export const addUser = async (user?: User) => {
  console.log('add user', user)
  if (user) {
    const userDocRef = Firebase.firestore()
      .collection('users')
      .doc(user.uid);
    const doc = await userDocRef.get();

    if (!doc.exists) {
      console.log('user dne')
      const displayName = user.displayName ?? randomWords(2).join(' ');
      const newUser: SodaUser = {
        userId: user.uid,
        displayName,
        email: user.email ?? undefined,
        username: slugify(displayName),
        joinDate: Firebase.firestore.Timestamp.now(),
        avatarUrl: user.photoURL ?? undefined,
      }
      return Firebase.firestore()
        .collection('users')
        .doc(user.uid)
        .set(newUser)
        .then(() => newUser)
        .catch(error => {
          alert(`Whoops, couldn't create the user: ${error.message}`)
        })
    }
  }

}
