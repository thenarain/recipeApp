import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd4vDFTXRM4WE-Z091Nfgpcr8PiZ9m1Uo",
  authDomain: "recipe-app-d8f53.firebaseapp.com",
  projectId: "recipe-app-d8f53",
  storageBucket: "recipe-app-d8f53.appspot.com",
  messagingSenderId: "718658040815",
  appId: "1:718658040815:web:ca7d511c1814ad90cd7c1a"
};

initializeApp(firebaseConfig);
var auth = getAuth();
var provider = new GoogleAuthProvider();

export { auth, provider };
