import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function saveAuthor(data) {
  try {
    const ref = await addDoc(collection(db, "authors"), data);
    return ref.id;
  } catch (error) {
    console.error("Error saving author:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
}

export async function getAuthors() {
  try {
    const snapshot = await getDocs(collection(db, "authors"));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting authors:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
}
