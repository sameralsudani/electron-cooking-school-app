import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7dGy5TjQEX06niMXbCuVlScpVmqD0G_I",
  authDomain: "electronfirebase-5f1a5.firebaseapp.com",
  projectId: "electronfirebase-5f1a5",
  storageBucket: "electronfirebase-5f1a5.firebasestorage.app",
  messagingSenderId: "371786987039",
  appId: "1:371786987039:web:7f2c7ffe8fc0d28e54472a",
  measurementId: "G-X1N5PR5DLZ",
};

initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
