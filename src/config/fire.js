import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//imported database to save to db
import 'firebase/database'

const config = {
  apiKey: "AIzaSyCmxQvFn8Kn3BFdqk_0vPx7vwwSQSGPfRM",
  authDomain: "stickynotes-c9717.firebaseapp.com",
  projectId: "stickynotes-c9717",
  storageBucket: "stickynotes-c9717.appspot.com",
  messagingSenderId: "85420865662",
  appId: "1:85420865662:web:bc5e9d6c18d16af4fdc02f"
};

const fire = firebase.initializeApp(config);
export default fire;