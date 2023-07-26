import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "pichichus-b08ef.firebaseapp.com",
	projectId: "pichichus-b08ef",
	storageBucket: "pichichus-b08ef.appspot.com",
	messagingSenderId: "1062899307934",
	appId: "1:1062899307934:web:a3f4d65400536226a2728f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);