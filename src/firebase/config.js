import { initializeApp } from "firebase/app";
import { getFirestore,firebase , connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9uLReR5810uHh-Z1RyyeVKOz93inj6aY",
    authDomain: "vue-udemy-firebase-projects.firebaseapp.com",
    projectId: "vue-udemy-firebase-projects",
    storageBucket: "vue-udemy-firebase-projects.appspot.com",
    messagingSenderId: "711673233375",
    appId: "1:711673233375:web:a2844723760c8283c30e6a"
};
const firebaseApp = initializeApp(firebaseConfig)

const projectAuth = getAuth(firebaseApp);
// const projectAuth = getAuth();
// connectAuthEmulator(projectAuth, "http://localhost:9099");
// projectAuth.useEmulator('http://localhost:9099/')
const db = getFirestore()
// connectFirestoreEmulator(db, 'localhost', 8081);
export {db,projectAuth}
