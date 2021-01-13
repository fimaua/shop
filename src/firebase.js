import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCM-sl1rP3AVhV5cR50z0-2p2BafTuZuqc",
  authDomain: "cleveroad-test-f9ba4.firebaseapp.com",
  projectId: "cleveroad-test-f9ba4",
  storageBucket: "cleveroad-test-f9ba4.appspot.com",
  messagingSenderId: "11263586789",
  appId: "1:11263586789:web:01bed164319a62f4c27f0c",
});

var db = firebase.firestore();

export { db };
