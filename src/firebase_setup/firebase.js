import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYvFBKVHYYCK17mZX0XARBgO6JhPYaSQQ",
    authDomain: "chess-affc6.firebaseapp.com",
    projectId: "chess-affc6",
    storageBucket: "chess-affc6.appspot.com",
    messagingSenderId: "462662104288",
    appId: "1:462662104288:web:6f923479cc429447c2cc85",
    measurementId: "G-9E5QKB0PWW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

export default app;
