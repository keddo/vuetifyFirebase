import firebase from "firebase/app";
import "firebase/firestore";
var config = {
  apiKey: "AIzaSyDezsA0KkKYJMTLBkw1MT7RvHS5EY6IaJA",
  authDomain: "ninja-f54a3.firebaseapp.com",
  databaseURL: "https://ninja-f54a3.firebaseio.com",
  projectId: "ninja-f54a3",
  storageBucket: "",
  messagingSenderId: "611719643696"
};
firebase.initializeApp(config);
const db = firebase.firestore();
export default db;
