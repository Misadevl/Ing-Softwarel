import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import escribirLog from "./escribirLog";

function añadirProducto(infoAdop, autor) {
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "Adopcion");
  const docRef = doc(collectionRef, infoAdop.email);
  setDoc(docRef, infoAdop);

  escribirLog("Edición", infoAdop, autor);
}

export default añadirProducto;
