import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey:import.meta.env.VITE_REACT_APP_API_KEYS ,
    authDomain:import.meta.env.VITE_REACT_APP_AUTH_DOMAINS,
    projectId:import.meta.env.VITE_REACT_APP_PROJECT_ID,
    storageBucket:import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.VITE_REACT_APP_MESSAGE_SENDER_ID,
    appId:import.meta.env.VITE_REACT_APP_API_ID,
    measurementId:import.meta.env.VITE_REACT_APP_MEASUREMENT_ID
};
// make Reference  and set variable
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export {auth,db,provider}