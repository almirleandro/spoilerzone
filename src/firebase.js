// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCK9kyzWbX0DkL3lSaYysc6QIFy5QrR2xw",
  authDomain: "moviespoilersdb.firebaseapp.com",
  projectId: "moviespoilersdb",
  storageBucket: "moviespoilersdb.appspot.com",
  messagingSenderId: "430921595614",
  appId: "1:430921595614:web:afe11c5fe403a076e4e04f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;