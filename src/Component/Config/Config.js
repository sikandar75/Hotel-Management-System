import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBLmDlcKeyc-GehHsRTLCLPQPy8pmVhqrk",
    authDomain: "hotelmanagementsystem-2910d.firebaseapp.com",
    projectId: "hotelmanagementsystem-2910d",
    storageBucket: "hotelmanagementsystem-2910d.appspot.com",
    messagingSenderId: "555020543872",
    appId: "1:555020543872:web:43f561005fd2d23851c365",
    measurementId: "G-X75SM4HEMQ"
  };
  // Initialize Firebase
    export const fire=firebase.initializeApp(firebaseConfig);
   export const createPost=firebase.database().ref('CREATE_POST')
   export const bookPost=firebase.database().ref('CREATE_BOOK')
  