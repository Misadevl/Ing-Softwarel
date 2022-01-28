import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import escribirLog from "./escribirLog";

function añadirProducto(infoProducto, autor) {
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "Contactanos");
  const docRef = doc(collectionRef, infoProducto.email);
  setDoc(docRef, infoProducto);

  escribirLog("Edición", infoProducto, autor);
}

export default añadirProducto;
