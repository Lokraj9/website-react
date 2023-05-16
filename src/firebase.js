// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtg6V5uzvifwlxY3lvFVcVlRhg9AkmnMs",
  authDomain: "realtor-clone-f00af.firebaseapp.com",
  projectId: "realtor-clone-f00af",
  storageBucket: "realtor-clone-f00af.appspot.com",
  messagingSenderId: "180703417280",
  appId: "1:180703417280:web:d02d44e3a8ed83cc5f6e25"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore();