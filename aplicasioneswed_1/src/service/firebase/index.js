// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ_Ga_QAcnTU1LLrYFX-JxA8MUGZ6THSg",
  authDomain: "proyecto3a-cb04b.firebaseapp.com",
  projectId: "proyecto3a-cb04b",
  storageBucket: "proyecto3a-cb04b.appspot.com",
  messagingSenderId: "849327206946",
  appId: "1:849327206946:web:8a5c90b8f1b2f4cc6a507b",
  measurementId: "G-EJWGJRNNFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
