// CREATE A NEW FIRE BASE PROJECT

// ADD THE FIREBASE PROJECT CREDENTIALS HERE
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // your firebase config code goes here
}


const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
