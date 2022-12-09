import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBaVPOrkmZeJSM1lA3xrWGG3dl20TbOAt4",
  authDomain: "fast-like-45a73.firebaseapp.com",
  projectId: "fast-like-45a73",
  storageBucket: "fast-like-45a73.appspot.com",
  messagingSenderId: "439112467337",
  appId: "1:439112467337:web:58bd083a3c5245be879758"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);