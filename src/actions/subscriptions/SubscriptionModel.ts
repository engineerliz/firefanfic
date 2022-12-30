import Firebase from 'firebase/compat/app'

interface SubscriptionModel {
  id: string;
  userId: string;
  ficId: string;
  createdOn: Firebase.firestore.Timestamp;
}

export default SubscriptionModel;