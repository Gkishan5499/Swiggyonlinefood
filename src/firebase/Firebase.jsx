import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkExnhvqzjmX4pWvUpRwU_8iD7Gl-CsYM",
  authDomain: "food-app-8e2c7.firebaseapp.com",
  projectId: "food-app-8e2c7",
  storageBucket: "food-app-8e2c7.appspot.com",
  messagingSenderId: "81652831924",
  appId: "1:81652831924:web:95764acfb096a0345ce9e1",
  // measurementId: "G-81M3JHJV3M"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const foodref = collection(db,"categories");
export const restref = collection(db,"resturant");
export default app;
