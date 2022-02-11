// import { seedDatabase } from '../seed'

const firebaseConfig = {
  apiKey: "AIzaSyAFjqEqc0AUNd_niUTbBj2OiX95Fa2XpQM",
  authDomain: "instagram-clone-thes.firebaseapp.com",
  projectId: "instagram-clone-thes",
  storageBucket: "instagram-clone-thes.appspot.com",
  messagingSenderId: "750307481359",
  appId: "1:750307481359:web:09485d6ee6908e39f7107a"
};
const firebase = window.firebase.initializeApp(firebaseConfig);
 const FieldValue = window.firebase.firestore.FieldValue;

// seedDatabase(firebase);

export {firebase, FieldValue}