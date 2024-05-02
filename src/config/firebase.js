import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDxFzLgUAoaYlENFg7NZWSnJqbv5aYr0C0",
  authDomain: "gdgroupbaku.firebaseapp.com",
  databaseURL: "https://gdgroupbaku.firebaseio.com",
  projectId: "gdgroupbaku",
  storageBucket: "gdgroupbaku.appspot.com",
  messagingSenderId: "730902011347",
  appId: "1:730902011347:web:a1c0a5920c180cd299a326",
  measurementId: "G-02Z6RZXP7E"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({ synchronizeTabs: !0 }).catch(() => { console.warn("DB offline support not available") })
export default {
  notificationSupported: firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported()) ? firebase.messaging() : null,
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
};