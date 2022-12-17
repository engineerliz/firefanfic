import Firebase from 'firebase/compat/app'
import 'firebase/compat/storage';

export const uploadFile = (data: string, id: string) => {
  Firebase.storage().ref().child(`/content/${id}`).putString(data);
}