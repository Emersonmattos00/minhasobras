import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addToCart(data) {
  try {
    // Add authenticated user ID to data
    const ref = await addDoc(collection(db, "cart"), data);
    return ref.id;
  } catch (error) {
    console.error("Error adding item to cart:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
}

export async function getCartItems() {
  try {
    // Filter items by authenticated user ID
    const snapshot = await getDocs(collection(db, "cart"));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
}
