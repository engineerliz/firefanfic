import Firebase from 'firebase/compat/app'
import { List } from 'immutable'
import FicModel from '../../models/fics/FicModel'

export const getFicById = (id: string): Promise<void | FicModel> => {
  return Firebase.firestore()
    .collection('fics')
    .doc(id)
    .get()
    .then((value) => ({
      ...value.data()
    } as FicModel))
    .catch(error => {
      alert(`Whoops, couldn't get the fic: ${error.message}`)
    })
}

export const getFicBySlug = (slug?: string): Promise<void | FicModel> => {
  return Firebase.firestore()
  .collection('fics')
  .where('slug', '==', slug)
  .get()
  .then(
      (value) =>
        ({
          ...value.docs[0].data(),
        } as FicModel),
    )
    .catch((error) => {
      console.log(`Whoops, couldn't get the fic: ${error.message}`);
    });
}

export const getFicsByUserId = (userId?: string): Promise<void | List<FicModel>> | undefined => {
  if (userId) {
    return Firebase.firestore()
    .collection('fics')
    .where('createdBy', '==', userId)
    .orderBy('createdOn', 'desc')
    .get()
    .then((fics) => List(fics.docs.map(fic => ({
      ...fic.data()
    } as FicModel))))
    .catch(error => {
      console.log(`Whoops, couldn't get the fics: ${error.message}`)
    })
  }
}

export const getAllFics = (): Promise<void | List<FicModel>> => {
  return Firebase.firestore()
    .collection('fics')
    .orderBy('lastUpdated', 'desc')
    .get()
    .then((fics) => List(fics.docs.map(fic => ({
      ...fic.data()
    } as FicModel))))
    .catch(error => {
      alert(`Whoops, couldn't get the fics: ${error.message}`)
    })
}