import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection } from "firebase/firestore";

const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyDqtokfWL23mjZVqfUa8yNoj2lY53HwVgI",
    authDomain: "basic-crud-operation.firebaseapp.com",
    databaseURL: "https://basic-crud-operation-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "basic-crud-operation",
    storageBucket: "basic-crud-operation.appspot.com",
    messagingSenderId: "840414112173",
    appId: "1:840414112173:web:3b6a068cfd7ec030c81924",
    measurementId: "G-2RZCMJ4BTE"
    // add your firebase config code here
};

// Initialize Firebase
// const db = firebase.initializeApp(firebaseConfig).firestore();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
module.exports = app.firestore();
// console.log(app);
// console.log('Firebase config done successfully');
// console.log(analytics);