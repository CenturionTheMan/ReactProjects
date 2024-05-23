// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV_OlKPWm_xY1J3XAaYDIrgjpv4lG32ow",
  authDomain: "piwo-lab-d7ee8.firebaseapp.com",
  projectId: "piwo-lab-d7ee8",
  storageBucket: "piwo-lab-d7ee8.appspot.com",
  messagingSenderId: "148024221661",
  appId: "1:148024221661:web:873d3bafa443b7c33ca034",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
