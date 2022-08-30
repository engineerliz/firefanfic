import Firebase from 'firebase/compat/app'

interface Fic {
  ficId: string;
  createdBy: string;
  createdOn: Firebase.firestore.Timestamp;
  title: string;
  description?: string;
  slug?: string;
}

export default Fic;