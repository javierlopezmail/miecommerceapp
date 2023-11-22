import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyC1LG66K6Gak1yKRYvKUyUc9HAbkMS2hcs",
    authDomain: "myeccomerceapp-9d87c.firebaseapp.com",
    projectId: "myeccomerceapp-9d87c",
    storageBucket: "myeccomerceapp-9d87c.appspot.com",
    messagingSenderId: "885656677648",
    appId: "1:885656677648:web:6a30222fd15358cc544995"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);