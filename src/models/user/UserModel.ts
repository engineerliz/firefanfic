import Firebase from 'firebase/app'

interface SodaUser {
  userId: string;
  username: string;
  displayName: string;
  email?: string;
  bio?: string;
  avatarUrl?: string;
  joinDate: Firebase.firestore.Timestamp
}

export default SodaUser;