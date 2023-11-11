import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_iAQRKV2HZSkXQ1SdV6IImVVBSjI8Zjg",
    authDomain: "coderhousereact-5e491.firebaseapp.com",
    projectId: "coderhousereact-5e491",
    storageBucket: "coderhousereact-5e491.appspot.com",
    messagingSenderId: "19702809376",
    appId: "1:19702809376:web:32eb40b713f67907688d45"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);