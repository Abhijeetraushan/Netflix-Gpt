// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC27Ey6lYvYx8XqRtI-CyGNIYzOrqfgqwE",
  authDomain: "netflixgpt-5acf5.firebaseapp.com",
  projectId: "netflixgpt-5acf5",
  storageBucket: "netflixgpt-5acf5.appspot.com",
  messagingSenderId: "223329999925",
  appId: "1:223329999925:web:bfc75150adc38734faa57c",
  measurementId: "G-53RWJX5J30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();