import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMPCPE8Tnz2MbWs4yKre24oXwo4JgDqrs",
  authDomain: "chaton-149eb.firebaseapp.com",
  projectId: "chaton-149eb",
  storageBucket: "chaton-149eb.appspot.com",
  messagingSenderId: "655114964676",
  appId: "1:655114964676:web:69bda3a4cfa416105dc391",
  measurementId: "G-8HW0SVVEDE"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}