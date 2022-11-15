// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaZlMcwTina9mivDPKiU9IUdelndGHKy0",
  authDomain: "first-firebase-project-4989a.firebaseapp.com",
  projectId: "first-firebase-project-4989a",
  storageBucket: "first-firebase-project-4989a.appspot.com",
  messagingSenderId: "737549003850",
  appId: "1:737549003850:web:55dc268d84fe9a13f9cab3",
  measurementId: "G-NLBQ6083P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);