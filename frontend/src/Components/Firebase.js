import {initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCUOa0gv6lnm4-dTCbpN6GHmsjsBGBJzqM",
    authDomain: "expensetracker-2da7a.firebaseapp.com",
    projectId: "expensetracker-2da7a",
    storageBucket: "expensetracker-2da7a.appspot.com",
    messagingSenderId: "765252306476",
    appId: "1:765252306476:web:5704855090df014c753389",
    measurementId: "G-8PCGS0QRPW"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();