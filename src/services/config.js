import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "nicohardware-c1fc1.firebaseapp.com",
  projectId: "nicohardware-c1fc1",
  storageBucket: "nicohardware-c1fc1.appspot.com",
  messagingSenderId: "745678782856",
  appId: "1:745678782856:web:662320d5a384f28b92fa3d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);