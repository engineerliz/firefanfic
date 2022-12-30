import SubscriptionModel from "./SubscriptionModel";
import Firebase from 'firebase/compat/app'
import { v4 as uuid_v4 } from 'uuid';

const subscriptionsDb = Firebase.firestore()
    .collection('subscriptions');

interface CreateSubscriptionValues {
  userId: string;
  ficId: string;
}

export const createSubscription = async (values: CreateSubscriptionValues) => {
  const newSubscription: SubscriptionModel = {
    ...values,
    id: uuid_v4(),
    createdOn: Firebase.firestore.Timestamp.now(),
  }

  const isSubscribed = await getSubscriptionByUserId(values).then((sub) => sub !== null);
  if (!isSubscribed) {
    return subscriptionsDb
      .doc(newSubscription.ficId)
      .set(newSubscription)
      .then(() => newSubscription)
      .catch(error => {
        alert(`Whoops, couldn't create the subscription: ${error.message}`)
      });
  }
}

export const getSubscriptionByUserId = (values: CreateSubscriptionValues) => {
  return subscriptionsDb
  .where('userId', '==', values.userId)
  .where('ficId', '==', values.ficId)
  .get()
  .then((value) => ({
      ...value.docs[0].data()
    } as SubscriptionModel))
    .catch(error => {
      alert(`Whoops, couldn't get the fic: ${error.message}`)
    });
}

export const deleteSubscription = async (values: CreateSubscriptionValues) => {
  const subscription = await getSubscriptionByUserId(values).then((sub) => sub);

  if (subscription) {
    subscriptionsDb.doc(subscription.id).delete().then(() => {
    console.log("Unsubscribed");
  }).catch((error) => {
      console.error("Error unsubscribing: ", error);
  });
  }
}