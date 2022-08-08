import Firebase from 'firebase/app'
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

export const getCurrentUserId = (): string | undefined => {
  return Firebase.auth().currentUser?.uid;
}

export const getCurrentUser = (): Promise<void | SodaUser> | undefined => {
  const currentUserId = getCurrentUserId()
  if (currentUserId) {
    return getUserById(currentUserId)
  }
}