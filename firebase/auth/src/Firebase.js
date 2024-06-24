
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDbBRNPH22rfcqG5eUNzKETofG__0a5gfU",
    authDomain: "ecommerce-fa7f6.firebaseapp.com",
    projectId: "ecommerce-fa7f6",
    storageBucket: "ecommerce-fa7f6.appspot.com",
    messagingSenderId: "119879960562",
    appId: "1:119879960562:web:78b4047e7b0ab0bfa80d6b"
  };
  

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);