import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAb3k4rJmqaluFo1KRIIl3xczjs_yb0zAY",
  authDomain: "aspire-animations-22ec2.firebaseapp.com",
  projectId: "aspire-animations-22ec2",
  storageBucket: "aspire-animations-22ec2.appspot.com",
  messagingSenderId: "803744554362",
  appId: "1:803744554362:web:36622293d3022d293e8ac3",
  measurementId: "G-QDNQ2V2GE7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
