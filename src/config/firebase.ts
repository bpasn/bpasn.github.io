// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBP6JW-4yUvmfHK-o7sSyddseMxroDESyQ",
    authDomain: "portfolio-77d8d.firebaseapp.com",
    projectId: "portfolio-77d8d",
    storageBucket: "portfolio-77d8d.appspot.com",
    messagingSenderId: "645771000903",
    appId: "1:645771000903:web:72aacd6c0f13480667c562",
    measurementId: "G-ZD98YFP7P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);