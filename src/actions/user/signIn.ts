import Firebase, { User } from 'firebase/app'
import randomWords from 'random-words'
import ReactGA from 'react-ga'
import slugify from 'slugify'
import { SodaUser, transformFirebaseUsertoSodaUser } from '../../models/user/UserModel'

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

export const addUser = async (user?: User): Promise<void | SodaUser> => {
  if (user) {
    const userDocRef = Firebase.firestore()
      .collection('users')
      .doc(user.uid);
    const doc = await userDocRef.get();

    if (!doc.exists) {
      const newUser = transformFirebaseUsertoSodaUser(user);
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
