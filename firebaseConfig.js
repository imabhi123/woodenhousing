import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi48T1kkmkv-pPvqNd-K9uKGc-u5QAZrQ",
  authDomain: "woodenhousing-48e9b.firebaseapp.com",
  projectId: "woodenhousing-48e9b",
  storageBucket: "woodenhousing-48e9b.appspot.com",
  messagingSenderId: "424149034900",
  appId: "1:424149034900:web:33d95bea4f247eaff69181",
  measurementId: "G-JWQZJV973D",
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;
