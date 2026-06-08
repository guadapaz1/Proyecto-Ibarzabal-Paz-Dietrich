import app from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD7j8KfCK912fy8bi0fRFldqJN1Rs5YOsc",
  authDomain: "rnfirebasedi.firebaseapp.com",
  projectId: "rnfirebasedi",
  storageBucket: "rnfirebasedi.firebasestorage.app",
  messagingSenderId: "415349425121",
  appId: "1:415349425121:web:fcf37c626d33b66ba948a0"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = app.firestore();