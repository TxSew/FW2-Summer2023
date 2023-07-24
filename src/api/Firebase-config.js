// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz48t-CnuPf1Bcf95HGLfDXBjzVoh3_r0",
  authDomain: "code-9963d.firebaseapp.com",
  projectId: "code-9963d",
  storageBucket: "code-9963d.appspot.com",
  messagingSenderId: "760170130826",
  appId: "1:760170130826:web:fee48dca0b2772680bac73",
  measurementId: "G-MCL7LW1LJD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

