import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <-- הוספנו את ייבוא מסד הנתונים

// ההגדרות החדשות של לני
const firebaseConfig = {
  apiKey: "AIzaSyCDtgAl4ubWZUEDlAeRGumTnH4W5ZdS_EE",
  authDomain: "baby-app-leni.firebaseapp.com",
  projectId: "baby-app-leni",
  storageBucket: "baby-app-leni.firebasestorage.app",
  messagingSenderId: "970432827513",
  appId: "1:970432827513:web:7202d05b60b1919d5344a8",
  measurementId: "G-NFWZC3GNSX"
};

// אתחול האפליקציה
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ייצוא החיבור למסד הנתונים כדי ש-App.jsx יוכל להשתמש בו
export const db = getFirestore(app);
