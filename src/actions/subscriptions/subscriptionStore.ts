import SubscriptionModel from "./SubscriptionModel";
import Firebase from 'firebase/compat/app'
import { v4 as uuid_v4 } from 'uuid';

interface CreateSubscriptionValues {
  userId: string;
  ficId: string;
}

export const createSubscription = async (values: CreateSubscriptionValues) => {
    console.log("createSubscription");

  const newSubscription: SubscriptionModel = {
    ...values,
    id: uuid_v4(),
    createdOn: Firebase.firestore.Timestamp.now(),
  }

  const isSubscribed = await getSubscriptionByUserId(values).then((sub) => sub !== null);
  
  if (!isSubscribed) {
    return Firebase.firestore()
    .collection('subscriptions')
      .doc(newSubscription.id)
      .set(newSubscription)
      .then(() => newSubscription)
      .catch(error => {
        alert(`Whoops, couldn't create the subscription: ${error.message}`)
      });
  }
}

export const getSubscriptionByUserId = (values: CreateSubscriptionValues) => {
    console.log("getSubscription");

  return Firebase.firestore()
    .collection('subscriptions')
  .where('userId', '==', values.userId)
  .where('ficId', '==', values.ficId)
  .get()
  .then((value) => value.docs[0] ? ({
      ...value.docs[0]?.data()
    } as SubscriptionModel) : null)
    .catch(error => {
      alert(`Whoops, couldn't get the subscription: ${error.message}`)
    });
}

export const deleteSubscription = async (values: CreateSubscriptionValues) => {
    console.log("deleteSubscription");

  const subscription = await getSubscriptionByUserId(values).then((sub) => sub);
  if (subscription) {
    Firebase.firestore()
    .collection('subscriptions').doc(subscription.id).delete().then(() => {
    console.log("Unsubscribed");
  }).catch((error) => {
      console.error("Error unsubscribing: ", error);
  });
  }
}