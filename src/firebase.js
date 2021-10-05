import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAzxqPotmOa4OxS1z-LduQH3SgFDCGzt0w",
  authDomain: "disneyclone-cb5e9.firebaseapp.com",
  projectId: "disneyclone-cb5e9",
  storageBucket: "disneyclone-cb5e9.appspot.com",
  messagingSenderId: "851998774980",
  appId: "1:851998774980:web:bcde7861f94b99ecb41b91"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
