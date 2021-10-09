import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA9uLReR5810uHh-Z1RyyeVKOz93inj6aY",
    authDomain: "vue-udemy-firebase-projects.firebaseapp.com",
    projectId: "vue-udemy-firebase-projects",
    storageBucket: "vue-udemy-firebase-projects.appspot.com",
    messagingSenderId: "711673233375",
    appId: "1:711673233375:web:a2844723760c8283c30e6a"
};
const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore()
export {db}
