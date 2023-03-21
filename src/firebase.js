import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtMEf4azE45OPbWWnqWAkPcwLv3_f612s",
  authDomain: "netflix-clone-ad47a.firebaseapp.com",
  projectId: "netflix-clone-ad47a",
  storageBucket: "netflix-clone-ad47a.appspot.com",
  messagingSenderId: "789319452547",
  appId: "1:789319452547:web:acc22b320fd731ea7798b6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
