import { SodaUser } from '../../models/user/UserModel';
import Firebase from 'firebase/compat/app'

export interface EditUserFields {
  displayName?: string;
  username?: string;
  bio?: string;
  avatarUrl?: string;
}

export const editUser = (user: SodaUser, editValues: EditUserFields) => {

  return Firebase.firestore()
    .collection('users')
    .doc(user.userId)
    .update({
      ...editValues,
    })
    .then()
    .catch(error => {
      alert(`Whoops, couldn't edit the user: ${error.message}`)
    })
}