// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCouq5WSz26g6IPR6vSo3WTR2dTaQgvwzw",
  authDomain: "coronatesting-81628.firebaseapp.com",
  databaseURL: "https://coronatesting-81628.firebaseio.com",
  projectId: "coronatesting-81628",
  storageBucket: "coronatesting-81628.appspot.com",
  messagingSenderId: "51288101238",
  appId: "1:51288101238:web:8583b152a72d28e46dea57",
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
