import Firebase from 'firebase/compat/app'

interface FicModel {
  ficId: string;
  createdBy: string;
  createdOn: Firebase.firestore.Timestamp;
  title: string;
  description?: string;
  slug?: string;
}

export default FicModel;