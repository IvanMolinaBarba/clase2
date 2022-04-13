// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJolnT-MT3pww9-DCalH2MfRJz2PrpupY",
  authDomain: "rj-26240-efb2c.firebaseapp.com",
  projectId: "rj-26240-efb2c",
  storageBucket: "rj-26240-efb2c.appspot.com",
  messagingSenderId: "1077470721138",
  appId: "1:1077470721138:web:af199b37407a238c93feeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)