import Firebase from 'firebase/compat/app';
import { List } from 'immutable';
import { v4 as uuid_v4 } from 'uuid';
import ChapterModel from '../../models/chapters/ChapterModel';

interface ChapterCreateValues {
  title: string;
  ficId: string;
  content: string;
}

export const getChaptersByFicId = (
  ficId?: string,
): Promise<List<ChapterModel> | void> => {
  return Firebase.firestore()
    .collection('chapters')
    .where('ficId', '==', ficId)
    .orderBy('chapterIndex', 'asc')
    .get()
    .then((chapters) => {
      return List(
        chapters.docs.map(
          (chap) =>
            ({
              id: chap.data()?.id,
              title: chap.data()?.title,
              content: chap.data()?.content,
              ficId: chap.data()?.ficId,
              createdBy: chap.data()?.createdBy,
              createdOn: chap.data()?.createdOn,
              chapterIndex: chap.data()?.chapterIndex,
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
    .collection('chapters')
    .where('ficId', '==', ficId)
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

export const getNextChapterIndex = (ficId?: string): Promise<number | void> => {
  return getChaptersByFicId(ficId).then((value) => {
    if (value) {
      return value.size + 1;
    }
  });
};

export const createChapter = async (values: ChapterCreateValues) => {
  if (Firebase.auth().currentUser?.uid) {
    let chapterIndex = 0;
    await getChaptersByFicId(values.ficId).then((value) => {
      if (value?.last()?.chapterIndex) {
        chapterIndex = value.last()!.chapterIndex! + 1;
      }
    });

    const newChapter: ChapterModel = {
      ...values,
      id: uuid_v4(),
      createdBy: Firebase.auth().currentUser!.uid,
      createdOn: Firebase.firestore.Timestamp.now(),
      chapterIndex,
    };

    return Firebase.firestore()
      .collection('chapters')
      .doc(newChapter.id)
      .set(newChapter)
      .then(() => newChapter)
      .catch((error) => {
        alert(`Whoops, couldn't create the chapter: ${error.message}`);
      });
  }
};
