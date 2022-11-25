// CREATE A NEW FIRE BASE PROJECT

// ADD THE FIREBASE PROJECT CREDENTIALS HERE
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJoj9_cSrd9HIyKef7xQfpOwRq5QO9WPg",
  authDomain: "fireblogsyt-a8e61.firebaseapp.com",
  projectId: "fireblogsyt-a8e61",
  storageBucket: "fireblogsyt-a8e61.appspot.com",
  messagingSenderId: "883281583420",
  appId: "1:883281583420:web:953bfd9ef3962c86045239",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
