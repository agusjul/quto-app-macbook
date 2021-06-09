import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAeC-cA6yYm5Fi2NqBFktZadWVvEKxztQ",
    authDomain: "quto-indonesia.firebaseapp.com",
    projectId: "quto-indonesia",
    storageBucket: "quto-indonesia.appspot.com",
    messagingSenderId: "19578788721",
    appId: "1:19578788721:web:88adb0db28bbb5c4ca74d0",
    measurementId: "G-CC41P2TK9B"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;