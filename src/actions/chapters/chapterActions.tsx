import Firebase from 'firebase/compat/app';
import { List } from 'immutable';
import { v4 as uuid_v4 } from 'uuid';
import ChapterModel from '../../models/chapters/ChapterModel';
import { uploadFile } from '../uploadFile/uploadFile';
import { getChapterContentId } from './utils';

export const getChaptersByFicId = (
  ficId?: string,
): Promise<List<ChapterModel> | void> => {
  return Firebase.firestore()
    .collection('fics')
    .doc(ficId)
    .collection('chapters')
    .orderBy('chapterIndex', 'asc')
    .get()
    .then((chapters) => {
      return List(
        chapters.docs.map(
          (chap) =>
            ({
              ...chap.data(),
            } as ChapterModel),
        ),
      );
    })
    .catch((error) => {
      console.log(`Whoops, couldn't get the chapters: ${error.message}`);
    });
};

export const getChapterByIndex = (
  ficId?: string,
  chapterIndex?: number,
): Promise<ChapterModel | void> => {
  return Firebase.firestore()
    .collection('fics')
    .doc(ficId)
    .collection('chapters')
    .where('chapterIndex', '==', chapterIndex)
    .get()
    .then(
      (value) =>
        ({
          ...value.docs[0].data(),
        } as ChapterModel),
    )
    .catch((error) => {
      console.log(`Whoops, couldn't get the chapter: ${error.message}`);
    });
};

export const getNextChapterIndex = (ficId?: string): Promise<number> => {
  return getChaptersByFicId(ficId).then((chapters) => {
    if (chapters) {
      return chapters.size + 1;
    }
    return 1;
  });
};

interface ChapterCreateValues {
  title: string;
  ficId: string;
  content: string;
}

export const createChapter = async (values: ChapterCreateValues) => {
  if (Firebase.auth().currentUser) {
    const chapterId = uuid_v4();
    uploadFile(values.content, getChapterContentId(values.ficId, chapterId));

    getChaptersByFicId(values.ficId).then((chapters) => {
      const newChapter: ChapterModel = {
        title: values.title,
        ficId: values.ficId,
        preview: values.content.slice(0, 500),
        id: chapterId,
        createdBy: Firebase.auth().currentUser!.uid,
        createdOn: Firebase.firestore.Timestamp.now(),
        chapterIndex: (chapters?.size ?? 1) + 1,
      };

      Firebase.firestore().collection('fics').doc(values.ficId).update({
        lastUpdated: Firebase.firestore.Timestamp.now(),
      });

      return Firebase.firestore()
        .collection('fics')
        .doc(values.ficId)
        .collection('chapters')
        .doc(newChapter.id)
        .set(newChapter)
        .then(() => newChapter)
        .catch((error) => {
          alert(`Whoops, couldn't create the chapter: ${error.message}`);
        });
    });
  }
};
