// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyARaLHrr6o52uKTbMG5VCbUCJIhZzZ4q7o",
  authDomain: "loginauthreactjs.firebaseapp.com",
  projectId: "loginauthreactjs",
  storageBucket: "loginauthreactjs.appspot.com",
  messagingSenderId: "536514428873",
  appId: "1:536514428873:web:be66a04cef111ce508f218"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
