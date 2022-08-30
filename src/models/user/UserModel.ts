import Firebase, { User } from 'firebase/app'
import randomWords from 'random-words';
import slugify from 'slugify';

export interface SodaUser {
  userId: string;
  username: string;
  displayName: string;
  email?: string;
  bio?: string;
  avatarUrl?: string;
  joinDate: Firebase.firestore.Timestamp;
}

export const transformFirebaseUsertoSodaUser = (user: User): SodaUser => {
  const displayName = user?.displayName ?? randomWords(2).join(' ');

  return {
    userId: user?.uid,
    displayName,
    email: user?.email ?? undefined,
    username: slugify(displayName.toLowerCase()),
    joinDate: Firebase.firestore.Timestamp.now(),
    avatarUrl: user?.photoURL ?? undefined,
  }
}