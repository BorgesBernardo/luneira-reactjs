import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyASdoneYbruWsYaGuZKle1m9sdvcI06E6E",
  authDomain: "luneira-cestetica.firebaseapp.com",
  projectId: "luneira-cestetica",
  storageBucket: "luneira-cestetica.appspot.com",
  messagingSenderId: "540912428124",
  appId: "1:540912428124:web:760791fb7980e5f288b299"
};

initializeApp(firebaseConfig);

const db = getFirestore ()

export default db