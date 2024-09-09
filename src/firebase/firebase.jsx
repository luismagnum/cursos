import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJwZtkW_77UuePml7BW4cGYwwcPvsi_Lo",
  authDomain: "cursologin-d52fc.firebaseapp.com",
  projectId: "cursologin-d52fc",
  storageBucket:"cursologin-d52fc.appspot.com",
  messagingSenderId:"789580008376",
  appId: "1:789580008376:web:470f540c3f0fe90253dd4d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
