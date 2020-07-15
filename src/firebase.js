import firebase from "firebase";
import "firebase/functions";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXIqa00eDz1YXMit0lS1Pw65vbNPv7CTM",
  authDomain: "todo-app-firebase-f1729.firebaseapp.com",
  databaseURL: "https://todo-app-firebase-f1729.firebaseio.com",
  projectId: "todo-app-firebase-f1729",
  storageBucket: "todo-app-firebase-f1729.appspot.com",
  messagingSenderId: "830484609630",
  appId: "1:830484609630:web:631e35821a891d82ba92cf",
  measurementId: "G-EX8E9FRDT6",
});

const db = firebaseApp.firestore();

export default db;
