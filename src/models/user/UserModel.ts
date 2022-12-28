import { FieldValue, serverTimestamp } from '@firebase/firestore';
import Firebase from 'firebase/compat/app'
import randomWords from 'random-words';
import slugify from 'slugify';

export interface SodaUser {
  userId: string;
  username: string;
  displayName: string;
  email?: string;
  bio?: string;
  avatarUrl?: string;
  joinDate: FieldValue;
}

export const transformFirebaseUsertoSodaUser = (user: Firebase.User): SodaUser => {
  const displayName = user?.displayName ?? randomWords(2).join(' ');

  console.log('transformFirebaseUsertoSodaUser user', user.displayName);
  console.log('displayName', displayName);
  return {
    userId: user?.uid,
    displayName,
    email: user?.email ?? undefined,
    username: slugify(displayName.toLowerCase()),
    joinDate: serverTimestamp(),
    avatarUrl: user?.photoURL ?? '',
  }
}