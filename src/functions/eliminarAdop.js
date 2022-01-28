import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";
import escribirLog from "./escribirLog";
const db = getFirestore(firebaseApp);

export default async function eliminarAdop(adop) {
  const coleccionRef = collection(db, "Adopcion");
  const docuRef = doc(coleccionRef, adop.email);
  const eliminado = await deleteDoc(docuRef);

  return eliminado;
}
