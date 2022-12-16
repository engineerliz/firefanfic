import Firebase from 'firebase/compat/app'
import { SodaUser } from '../../models/user/UserModel'

export const getUserById = (id: string): Promise<void | SodaUser> => {
  return Firebase.firestore()
    .collection('users')
    .doc(id)
    .get()
    .then((value) => ({
      ...value.data()
    } as SodaUser))
    .catch(error => {
      alert(`Whoops, couldn't get the user: ${error.message}`)
    })
}

export const getCurrentUserId = (): Promise<string | undefined> => {
  return new Promise((resolve) => {
    return resolve(Firebase.auth().currentUser?.uid)
  });
}

export const getUserByUsername = (username?: string): Promise<SodaUser | void> => {
  return Firebase.firestore()
    .collection('users')
    .where('username', '==', username)
    .get()
    .then(
      (value) =>
        ({
          ...value.docs[0].data(),
        } as SodaUser),
    )
    .catch((error) => {
      console.log(`Whoops, couldn't get the user: ${error.message}`);
    });
}

export const getCurrentUser = (): Promise<void | SodaUser> | undefined => {
  const currentUserId = getCurrentUserId()
  // if (currentUserId) {
  //   return getUserById(currentUserId)
  // }
  return undefined
}