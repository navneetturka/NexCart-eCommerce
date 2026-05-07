
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3e4g5RfX_QPPC4M46DmfDQN2dIzPr8aA",
  authDomain: "nexcart-b2e74.firebaseapp.com",
  projectId: "nexcart-b2e74",
  storageBucket: "nexcart-b2e74.firebasestorage.app",
  messagingSenderId: "691529262518",
  appId: "1:691529262518:web:1aeb52ec25c909ef420d17",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

