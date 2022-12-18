import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';

export const trackPageView = (pageName: string) => {
  firebase.analytics().logEvent('page_view', {
    name: pageName,
  });
}