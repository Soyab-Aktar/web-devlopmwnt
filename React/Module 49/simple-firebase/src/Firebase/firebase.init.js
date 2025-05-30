import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMLANaSJ_4RjiHFDGD4UPcKLELlmAwGsI",
  authDomain: "simple-firebase-d1b02.firebaseapp.com",
  projectId: "simple-firebase-d1b02",
  storageBucket: "simple-firebase-d1b02.firebasestorage.app",
  messagingSenderId: "498860114189",
  appId: "1:498860114189:web:f561772aab84491a00b044"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
