import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCR8Eqv39Oj_6c2pPgzvGGYMpXwyim3mEA",
    authDomain: "clone-yt-5db8b.firebaseapp.com",
    projectId: "clone-yt-5db8b",
    storageBucket: "clone-yt-5db8b.appspot.com",
    messagingSenderId: "550130477031",
    appId: "1:550130477031:web:79eb6eef6e7cd867e37f42",
    measurementId: "G-3P8QYLW2RS"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};