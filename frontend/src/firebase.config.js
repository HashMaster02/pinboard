import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDZ388GFohxZWUrHvjckBkDGYTirRXJMBw',
    authDomain: 'pinboard-191ca.firebaseapp.com',
    projectId: 'pinboard-191ca',
    storageBucket: 'pinboard-191ca.appspot.com',
    messagingSenderId: '186917903731',
    appId: '1:186917903731:web:69583e4c2f05f1ac28b906',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
