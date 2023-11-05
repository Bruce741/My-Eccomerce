// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYqmC8Iw9-dPTLRTej_2rx3ajXH7argAo",
  authDomain: "eccomerceprueba-a68b8.firebaseapp.com",
  projectId: "eccomerceprueba-a68b8",
  storageBucket: "eccomerceprueba-a68b8.appspot.com",
  messagingSenderId: "231334028110",
  appId: "1:231334028110:web:5b493afa3ac78f12edf41f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);