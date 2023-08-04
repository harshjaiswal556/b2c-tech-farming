import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // apiKey: "AIzaSyCggZCcBun0cwNfOWGC2K8pZcgIRWMfqwY",
  // authDomain: "olx-sijeesh.firebaseapp.com",
  // projectId: "olx-sijeesh",
  // storageBucket: "olx-sijeesh.appspot.com",
  // messagingSenderId: "767411886432",
  // appId: "1:767411886432:web:2ef6862afc88f2c423a605",
  // measurementId: "G-4ELNR9DJHL"
  apiKey: "AIzaSyA9J-roVQQHJqvXVzunk6EIJwv1pVipBPk",
  authDomain: "epics-5659a.firebaseapp.com",
  projectId: "epics-5659a",
  storageBucket: "epics-5659a.appspot.com",
  messagingSenderId: "575001038576",
  appId: "1:575001038576:web:45b99b023bf889e869fc35",
  measurementId: "G-XK9GWWX5S5",
};

export const Firebase = firebase.initializeApp(firebaseConfig); //named export
// const app = initializeApp(firebaseConfig);
// export const Firebase = getFirestore(app);
// firebase.initializeApp(firebaseConfig);
// var Firebase = firebase.firestore();
// export {Firebase};
