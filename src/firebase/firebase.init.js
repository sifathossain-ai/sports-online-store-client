// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9ZGAY8oDRqxGmozDO2CNGwsDKoUjvhlE",
    authDomain: "sports-online-store.firebaseapp.com",
    projectId: "sports-online-store",
    storageBucket: "sports-online-store.firebasestorage.app",
    messagingSenderId: "310780288518",
    appId: "1:310780288518:web:202d31d90200a6f2bead87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)