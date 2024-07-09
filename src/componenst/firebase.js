// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvsUlQTKWTKuUVhNl1QvDdr7R587iB9ho",
  authDomain: "login-auth-533fb.firebaseapp.com",
  projectId: "login-auth-533fb",
  storageBucket: "login-auth-533fb.appspot.com",
  messagingSenderId: "220901281056",
  appId: "1:220901281056:web:e5ad55fe403121353e9b45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app)
export default app;