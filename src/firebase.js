import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCf7bBjIF5wBRE7FQ_sdF5bsGkT8ifrb28",
  authDomain: "chat-app-df194.firebaseapp.com",
  projectId: "chat-app-df194",
  storageBucket: "chat-app-df194.appspot.com",
  messagingSenderId: "198314108287",
  appId: "1:198314108287:web:1fec73ce3bda4854ac264a",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
