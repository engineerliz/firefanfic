import Firebase from 'firebase/compat/app'
import { List } from 'immutable'
import Fic from '../../models/fics/FicModel'

export const getFicById = (id: string): Promise<void | Fic> => {
  return Firebase.firestore()
    .collection('fics')
    .doc(id)
    .get()
    .then((value) => ({
      ...value.data()
    } as Fic))
    .catch(error => {
      alert(`Whoops, couldn't get the fic: ${error.message}`)
    })
}

export const getFicsByUserId = (userId?: string): Promise<void | List<Fic>> | undefined => {
  if (userId) {
    return Firebase.firestore()
    .collection('fics')
    .where('createdBy', '==', userId)
    .orderBy('createdOn', 'desc')
    .get()
    .then((fics) => List(fics.docs.map(fic => ({
      title: fic.data()?.title,
      description: fic.data()?.description,
      ficId: fic.data()?.ficId,
      slug: fic.data()?.slug,
    } as Fic))))
    .catch(error => {
      console.log(`Whoops, couldn't get the fics: ${error.message}`)
    })
  }
}

export const getAllFics = (): Promise<void | List<Fic>> => {
  return Firebase.firestore()
    .collection('fics')
    .orderBy('createdOn', 'desc')
    .get()
    .then((fics) => List(fics.docs.map(fic => ({
      title: fic.data()?.title,
      description: fic.data()?.description,
      ficId: fic.data()?.ficId,
      slug: fic.data()?.slug,
    } as Fic))))
    .catch(error => {
      alert(`Whoops, couldn't get the fics: ${error.message}`)
    })
}