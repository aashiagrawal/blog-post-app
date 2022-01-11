// require("firebase/firestore");

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc, getDocs, doc, updateDoc} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyA-zFv_K1k3G4_baPcsDI1OxqoCP7EKoaY",
    authDomain: "react-intro-blog-19ec1.firebaseapp.com",
    projectId: "react-intro-blog-19ec1",
    storageBucket: "react-intro-blog-19ec1.appspot.com",
    messagingSenderId: "637825989012",
    appId: "1:637825989012:web:2356fb885365a2f5f4f781",
    measurementId: "G-3GNB2V49JP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var db = getFirestore(app);
//   var db = firebase.firestore();

  export {collection};
  export {addDoc};
  export {getDocs};
  export {getDoc};
  export {doc};
  export {updateDoc};
  export {createUserWithEmailAndPassword};
  export {getAuth};
  export {signInWithEmailAndPassword};
  export {onAuthStateChanged};
  export {signOut};

  export const auth = getAuth(app);
  // export const firestore = firebase.firestore
  export default db;