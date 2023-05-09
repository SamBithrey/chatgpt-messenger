import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3_LXHDZO-eiIwA4X2Id8v1Nn8nup3FpE",
    authDomain: "chatgpt-messenger-e566b.firebaseapp.com",
    projectId: "chatgpt-messenger-e566b",
    storageBucket: "chatgpt-messenger-e566b.appspot.com",
    messagingSenderId: "913956632354",
    appId: "1:913956632354:web:2321acca563a77dc34177b"
};
  
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };