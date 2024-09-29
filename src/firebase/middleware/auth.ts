import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBcfZ2LlOTp5V6vdMq9__5uJ5s1TO9yvM",
  authDomain: "portfolio-website-787df.firebaseapp.com",
  projectId: "portfolio-website-787df",
  storageBucket: "portfolio-website-787df.appspot.com",
  messagingSenderId: "471546293342",
  appId: "1:471546293342:web:91dbd6d271cc5d138b18cf",
  measurementId: "G-HFTB0BGFDT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function isAuthenticated() {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      resolve(!!user);
    });
  });
}
