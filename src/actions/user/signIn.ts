import Firebase from 'firebase/compat/app'
import ReactGA from 'react-ga'
import { SodaUser, transformFirebaseUsertoSodaUser } from '../../models/user/UserModel'

export const signIn = () => {
  console.log('sign in')
  ReactGA.event({
    category: 'User',
    action: 'Log in',
  })

  const provider = new Firebase.auth.GoogleAuthProvider()

  return Firebase.auth()
    .signInWithPopup(provider)
    .then(async value => {
      await addUser(value.user ?? undefined)
    }).catch(error => {
      console.error('could not sign in', error)
    })
}

export const signInWithEmailLink = (email: string, domain: string) => {
return Firebase.auth().sendSignInLinkToEmail(email, {
  url: `${domain}/finish-signin`,
  handleCodeInApp: true,
})
  .then(() => {
    window.localStorage.setItem('emailForSignIn', email);
  })
  .catch((error) => {
    console.error('could not sign in', error)
  });

}

export const isSignInWithEmailLink = () => {
  return Firebase.auth().isSignInWithEmailLink(window.location.href)
}

export const finishSignInWithEmailLink = (
  email: string,
): Promise<void | Firebase.auth.UserCredential> => {
  console.log('Sign in with email link')

  return Firebase.auth()
    .signInWithEmailLink(email, window.location.href)
    .then(async (result) => {
      await addUser(result.user ?? undefined)
      window.localStorage.removeItem('emailForSignIn');

      return result;
    })
    .catch((error) => {
      console.log('signInWithEmailLink error', error);
    });
}

export const addUser = async (user?: Firebase.User): Promise<void | SodaUser> => {
  if (user) {
    const userDocRef = Firebase.firestore()
      .collection('users')
      .doc(user.uid);
    const doc = await userDocRef.get();

    console.log('addUser', user);

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
