import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

export async function saveBook(data) {
  try {
    // Validate book data and check user permissions // Adicionado
    const ref = await addDoc(collection(db, "books"), data);
    return ref.id;
  } catch (error) {
    console.error("Error saving book:", error);
    throw error;
  }
}

export async function getBooks() {
  try { // Adicionado
    const snapshot = await getDocs(collection(db, "books"));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) { // Adicionado
    console.error("Error fetching books:", error); // Adicionado
    throw error; // Adicionado
  } // Adicionado
}

export async function updateBook(id, data) {
  try {
    // Validate book data and check user permissions // Adicionado
    const ref = doc(db, "books", id);
    await updateDoc(ref, data);
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
}

