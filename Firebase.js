// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZvl1_L-i0HoA3mBMxNAC-aYn8jtHoCMs",
  authDomain: "crub-basico-ifsc.firebaseapp.com",
  projectId: "crub-basico-ifsc",
  storageBucket: "crub-basico-ifsc.appspot.com",
  messagingSenderId: "127171841431",
  appId: "1:127171841431:web:164b236519e2d83b6508d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;