import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA9J-roVQQHJqvXVzunk6EIJwv1pVipBPk",
  authDomain: "epics-5659a.firebaseapp.com",
  projectId: "epics-5659a",
  storageBucket: "epics-5659a.appspot.com",
  messagingSenderId: "575001038576",
  appId: "1:575001038576:web:45b99b023bf889e869fc35",
  measurementId: "G-XK9GWWX5S5",
};

export const Firebase = firebase.initializeApp(firebaseConfig);
