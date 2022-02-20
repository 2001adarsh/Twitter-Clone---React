// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCB6Xxn_vAVAMqHdf6fiY7tK9SYeQco1w0",
  authDomain: "twitter-clone-bd877.firebaseapp.com",
  projectId: "twitter-clone-bd877",
  storageBucket: "twitter-clone-bd877.appspot.com",
  messagingSenderId: "895292992662",
  appId: "1:895292992662:web:7a644048628b80972426b7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
