import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpQ7xpKt9hlNv_tMBJh03SMWdju6D73vM",
  authDomain: "eat-wind.firebaseapp.com",
  databaseURL: "https://eat-wind-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eat-wind",
  storageBucket: "eat-wind.appspot.com",
  messagingSenderId: "542082677635",
  appId: "1:542082677635:web:38b37775b5dbc8867714b6"
};

export const app = initializeApp(firebaseConfig);