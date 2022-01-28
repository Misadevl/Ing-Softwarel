import React from "react";
import Container from "react-bootstrap/Container";

import Home from "./views/Home";
import Login from "./views/Login";

import firebaseApp from "./firebase/credenciales";
import ModalEditarAdop from "./components/ModalEditarAdop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeAdop from "./views/HomeAdop";
const auth = getAuth(firebaseApp);

function App() {
  const [usuario, setUsuario] = React.useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  
    
  return (
    
    <Container fluid>
      
      {usuario ?  <Home usuario={usuario} />    : <Login />}
      
      <HomeAdop usuario={usuario} />

   
    </Container>
    
  );
}

export default App;
