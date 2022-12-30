import Firebase from 'firebase/compat/app'

export const incrementFicView = async (ficId: string) => {
  console.log("incrementFicView");

  const views = await getViewsByFicId(ficId);
  const newViews = (views ?? 0) + 1;

  return Firebase.firestore()
    .collection('ficViews')
    .doc(ficId)
    .set({
      ficId,
      viewCount: newViews,
    })
    .then(() => newViews)
    .catch(error => {
      alert(`Whoops, couldn't increment views: ${error.message}`)
    });
}

export const getViewsByFicId = (ficId: string) => {
  return Firebase.firestore()
    .collection('ficViews')
    .doc(ficId)
    .get()
    .then((views) => views.data()?.viewCount as number);
}