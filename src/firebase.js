// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREABSE_KEY,
  authDomain: process.env.REACT_APP_FIREABSE_DOMAIN,
  projectId: process.env.REACT_APP_FIREABSE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREABSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREABSE_SENDER_ID,
  appId: process.env.REACT_APP_FIREABSE_MESSAGING_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;