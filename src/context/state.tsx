import Firebase, { User } from 'firebase/app'
import { createContext, useContext } from 'react';

export type CurrentUser = {
  currentUserId?: string;
  setCurrentUserId: (id: string) => void;
}

export const CurrentUserContext = createContext<CurrentUser>({
  currentUserId: Firebase.auth().currentUser?.uid,
  setCurrentUserId: () => { },
})

export const useCurrentUserContext = () => useContext(CurrentUserContext)
