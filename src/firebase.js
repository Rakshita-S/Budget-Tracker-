// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCb_WDuYl1HliVcY28xmzA_zGer6d2Oxv8",
  authDomain: "budget-tracker-856ac.firebaseapp.com",
  projectId: "budget-tracker-856ac",
  storageBucket: "budget-tracker-856ac.appspot.com",
  messagingSenderId: "387990938136",
  appId: "1:387990938136:web:5ea89ebda0a7e3426dd96d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
