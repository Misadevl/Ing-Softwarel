import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";
import escribirLog from "./escribirLog";
const db = getFirestore(firebaseApp);

export default async function eliminarProductoHome(contacto) {
  const coleccionRef = collection(db, "Contactanos");
  const docuRef = doc(coleccionRef, contacto.email);
  const eliminado = await deleteDoc(docuRef);

  return eliminado;
}
