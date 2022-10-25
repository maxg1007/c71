import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui

  apiKey: "AIzaSyAJ4sRgxUOG1lorjQks8uDJNkQP-UOCliY",
  authDomain: "c-71-e1161.firebaseapp.com",
  projectId: "c-71-e1161",
  storageBucket: "c-71-e1161.appspot.com",
  messagingSenderId: "926319927988",
  appId: "1:926319927988:web:63f0c3a1ca7cb8ec692de1",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
