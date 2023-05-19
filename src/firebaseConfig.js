
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDP86XcjegH__xdh-khFr6Qe-JtZbevCJc",
  authDomain: "cephie-react.firebaseapp.com",
  projectId: "cephie-react",
  storageBucket: "cephie-react.appspot.com",
  messagingSenderId: "630448842550",
  appId: "1:630448842550:web:21715ecf6accf325b6f597"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)