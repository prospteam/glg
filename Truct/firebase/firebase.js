import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDhKPhAOYGQqoj78eBLSWRLP4qcuLEsWa4",
    authDomain: "trucktrade-enterprises-inc.firebaseapp.com",
    databaseURL: "https://trucktrade-enterprises-inc.firebaseio.com",
    projectId: "trucktrade-enterprises-inc",
    storageBucket: "trucktrade-enterprises-inc.appspot.com",
    messagingSenderId: "691070890487",
    appId: "1:691070890487:web:5b298b5c4bc1fc7430fef2",
    measurementId: "G-0S70CBR7R8"
};
// Initialize Firebase
firebase.initializeApp(config);


export default firebase;