import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore, collection } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDYTiAPe9-LB9s1rcIVoBKS4C1zn5Apg1w",

  authDomain: "disneyplusclone2-eddf3.firebaseapp.com",

  projectId: "disneyplusclone2-eddf3",

  storageBucket: "disneyplusclone2-eddf3.appspot.com",

  messagingSenderId: "489683325697",

  appId: "1:489683325697:web:0eb81360f142b0d4b68100",

  measurementId: "G-15SJ7M0DXL",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const collected = collection(db, "movies");
const signIn = signInWithPopup();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, signIn, provider, storage, collected };
export default db;
