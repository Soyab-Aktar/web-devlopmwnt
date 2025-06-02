
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkVufijHOHHCASZs23gjTgOvmYagJDayQ",
  authDomain: "email-auth-5b1eb.firebaseapp.com",
  projectId: "email-auth-5b1eb",
  storageBucket: "email-auth-5b1eb.firebasestorage.app",
  messagingSenderId: "673979179823",
  appId: "1:673979179823:web:281fa7df261ce1224cb7da"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);