import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default async function getAllProducts() {
  const contactanos = [];
  const collectionRef = collection(db, "Contactanos");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    contactanos.push(doc.data());
  });
  return contactanos;
}
