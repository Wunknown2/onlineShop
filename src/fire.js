// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy3ox06_HDs6aok8AJ_NbMBrNfTjMfwLU",
  authDomain: "shop37-d53ff.firebaseapp.com",
  projectId: "shop37-d53ff",
  storageBucket: "shop37-d53ff.appspot.com",
  messagingSenderId: "203369221598",
  appId: "1:203369221598:web:86c932f3e13c8a7b38a14f",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
