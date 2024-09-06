import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, getStream } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGka2cVBLgIGqPLQc45lq6AZbf4aimnmw",
  authDomain: "fir-course-3d26d.firebaseapp.com",
  projectId: "fir-course-3d26d",
  storageBucket: "fir-course-3d26d.appspot.com",
  messagingSenderId: "887839594027",
  appId: "1:887839594027:web:cc0008cc84f05bb75ebc6e",
  measurementId: "G-KFWM1WF0XW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
