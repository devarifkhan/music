import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBGXA0kundZrUW110xhRIPbPryz66ojJFo",
    authDomain: "music-491ce.firebaseapp.com",
    projectId: "music-491ce",
    storageBucket: "music-491ce.appspot.com",
    appId: "1:559939289933:web:891af5882a0ca34efd6d04"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()


const userCollection = db.collection('users')

export {
    auth, db, userCollection
}

