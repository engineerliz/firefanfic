import Firebase from 'firebase/compat/app'

interface ChapterModel {
  id: string;
  ficId: string;
  createdBy: string;
  createdOn: Firebase.firestore.Timestamp;
  title: string;
  chapterIndex: number;
  preview?: string;
}

export default ChapterModel;