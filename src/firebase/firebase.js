import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDkq6a42CquabeMMszISrvlq8X-KFrZB6g",
  authDomain: "antiques-10040.firebaseapp.com",
  projectId: "antiques-10040",
  storageBucket: "antiques-10040.appspot.com",
  messagingSenderId: "195387193305",
  appId: "1:195387193305:web:6d0e75047faef607610bc8",
  measurementId: "G-CQ1MGV0SZ1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
