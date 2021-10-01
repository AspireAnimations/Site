import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCsaSPzyXdT-AK2ZbemfZpcaVzowO0Z74Q",
  authDomain: "aspire-animations-ec493.firebaseapp.com",
  projectId: "aspire-animations-ec493",
  storageBucket: "aspire-animations-ec493.appspot.com",
  messagingSenderId: "338487860961",
  appId: "1:338487860961:web:2ec1a88eb22e17d701a1a0",
  measurementId: "G-8EF1G825HR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
