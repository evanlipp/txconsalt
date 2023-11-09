import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB-Eg3DBWj2d8-JzXG0iT_1Q9ibGWHd_r8",
  authDomain: "txconsalttest.firebaseapp.com",
  projectId: "txconsalttest",
  storageBucket: "txconsalttest.appspot.com",
  messagingSenderId: "1055574307790",
  appId: "1:1055574307790:web:c5c8b7114ae5a2a984b19f",
});

export default dataBase = getFirestore(firebaseApp);
