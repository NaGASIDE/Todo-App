import firebase from 'firebase';

import 'firebase/analytics';
import 'firebase/database';
import 'firebase/auth';


export const firebaseConfig = {
  apiKey: 'AIzaSyA8bEWW9VVL7o8VW9sn-HRYss1N2y6aMpI',
  authDomain: 'todo-f9596.firebaseapp.com',
  projectId: 'todo-f9596',
  storageBucket: 'todo-f9596.appspot.com',
  messagingSenderId: '237802778262',
  appId: '1:237802778262:web:16e47a138c1dbac5bcdcb7',
  measurementId: 'G-QW2R4V5KXR',
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore()
export default firebase;
