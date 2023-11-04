// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "Your API Key", //**************************Put API KEY here******************************** */
  authDomain: "rele-project.firebaseapp.com",
  projectId: "rele-project",
  storageBucket: "rele-project.appspot.com",
  messagingSenderId: "629394048644",
  appId: "1:629394048644:web:c0bd26fa5a8e2f7ba924d1",
  measurementId: "G-0RGZ872T5Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
