import Firebase from 'firebase/compat/app'
import { List } from 'immutable';
import ChapterModel from '../chapters/ChapterModel';

interface AuthorModel {
  name: string;
  link?: string;
}

interface FicModel {
  ficId: string;
  createdBy: string;
  createdOn: Firebase.firestore.Timestamp;
  lastUpdated?: Firebase.firestore.Timestamp;
  title: string;
  description?: string;
  slug?: string;
  chapters?: List<ChapterModel>;
  postedFor?: AuthorModel;
}

export default FicModel;