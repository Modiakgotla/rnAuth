// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALjmzwpHkCQ0Q1P9ZFNMsLgtJqo0xokQw",
  authDomain: "nativerecording-e18ec.firebaseapp.com",
  projectId: "nativerecording-e18ec",
  storageBucket: "nativerecording-e18ec.appspot.com",
  messagingSenderId: "215132325941",
  appId: "1:215132325941:web:d7a422fd98e97756b5097c"
};

// Initialize Firebase

let app;

if(firebase.apps.length === 0){
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export{auth};
