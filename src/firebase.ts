import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut as SignOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { DateTime } from "luxon";
import { useState } from "react";
import firebaseEnv from "./firebaseEnv";

// firebase init
export let app = initializeApp(firebaseEnv);

// authentication
let provider = new GoogleAuthProvider();

export let auth = getAuth();

export let signIn = () => signInWithRedirect(auth, provider);

export let signOut = () => SignOut(auth);

// firestore
let db = getFirestore(app);

export function push() {
  let user = auth.currentUser;
  if (!user) return;
  let logs = collection(db, "logs", user.uid, "logs");
  addDoc(logs, {
    time: DateTime.now().toString(),
  });
}

export function useCount() {
  let user = auth.currentUser;
  let [count, setCount] = useState(0);
  if (user) {
    onSnapshot(collection(db, "logs", user.uid, "logs"), (logs) => {
      setCount(logs.size);
    });
  }
  return count;
}
