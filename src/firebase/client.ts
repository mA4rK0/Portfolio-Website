// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBcfZ2LlOTp5V6vdMq9__5uJ5s1TO9yvM",
  authDomain: "portfolio-website-787df.firebaseapp.com",
  projectId: "portfolio-website-787df",
  storageBucket: "portfolio-website-787df.appspot.com",
  messagingSenderId: "471546293342",
  appId: "1:471546293342:web:91dbd6d271cc5d138b18cf",
  measurementId: "G-HFTB0BGFDT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
