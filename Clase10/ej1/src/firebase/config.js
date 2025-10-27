import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBQyjVTlaeIsfgyzWfeKC63KmhIgL-zsyI",
  authDomain: "proyectofirebase-50c7b.firebaseapp.com",
  projectId: "proyectofirebase-50c7b",
  storageBucket: "proyectofirebase-50c7b.firebasestorage.app",
  messagingSenderId: "230706679651",
  appId: "1:230706679651:web:c7310d394c296cb3e00d56"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()
