// the main file in our front-end app
// create-react-app expects a file in src/index.tsx and loads everything from here

import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './features/App';
import 'firebase/compat/storage';
import 'firebase/compat/analytics';
import { getAnalytics } from 'firebase/analytics';

console.log('create-react-app env:', process.env.NODE_ENV);
console.log('firefly project:', process.env.REACT_APP_ENV);

// connect our app to firebase
const dbConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};
const app = Firebase.initializeApp(dbConfig);
const analytics = getAnalytics(app);

// Google Analytics
// https://github.com/react-ga/react-ga#api
ReactGA.initialize(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID!);

// Sentry
// https://docs.sentry.io/clients/javascript/integrations/react/
// window.Raven.config(process.env.REACT_APP_SENTRY_RAVEN_TRACKING_URL).install()

// render the App component to our document root with React
ReactDOM.render(<App />, document.getElementById('root'));
