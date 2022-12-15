import Firebase from 'firebase/compat/app'
import slugify from 'slugify'
import { v4 as uuid_v4 } from 'uuid';
import FicModel from '../../models/fics/FicModel';

interface FicCreateValues {
  title: string;
  description?: string;
}

const createFic = (values: FicCreateValues) => {
  const newFic: FicModel = {
    ...values,
    ficId: uuid_v4(),
    slug: slugify(values.title, { lower: true }),
    createdBy: Firebase.auth().currentUser?.uid ? Firebase.auth().currentUser!.uid : '',
    createdOn: Firebase.firestore.Timestamp.now(),
  }

  return Firebase.firestore()
    .collection('fics')
    .doc(newFic.ficId)
    .set(newFic)
    .then(() => newFic)
    .catch(error => {
      alert(`Whoops, couldn't create the fic: ${error.message}`)
    })
}

export default createFic
