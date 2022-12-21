// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8rznDymV61kCv-_3LOxkJcK0RYzcYQjw",
  authDomain: "recipe-app-auth-2adde.firebaseapp.com",
  projectId: "recipe-app-auth-2adde",
  storageBucket: "recipe-app-auth-2adde.appspot.com",
  messagingSenderId: "526699833291",
  appId: "1:526699833291:web:01085c5e48a42008f9784e"
};

// Initialize Firebase

let app;
if(firebase.apps.length ===0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}
const auth = firebase.auth()

export {auth}