import firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAT-hsDjfYtQxiTKWMqOOC-OkgABC3gV2c",
  authDomain: "bank-credit-a2975.firebaseapp.com",
  projectId: "bank-credit-a2975",
  storageBucket: "bank-credit-a2975.appspot.com",
  messagingSenderId: "172816219148",
  appId: "1:172816219148:web:e9fe89ff8c3df028278229",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
