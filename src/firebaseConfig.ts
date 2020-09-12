import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUiJSmSABkjAyfhe07kldLt6m4exc_jcg",
    authDomain: "delivery-app-6eab3.firebaseapp.com",
    databaseURL: "https://delivery-app-6eab3.firebaseio.com",
    projectId: "delivery-app-6eab3",
    storageBucket: "delivery-app-6eab3.appspot.com",
    messagingSenderId: "357453854370",
    appId: "1:357453854370:web:41eff7c7bf19de14d109fb",
    measurementId: "G-2RD5EJYZT8"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

