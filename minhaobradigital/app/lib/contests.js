import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function createContest(data) {
  try {
    // Validate contest data and check user permissions
    const ref = await addDoc(collection(db, "contests"), data);
    return ref.id;
  } catch (error) {
    console.error("Error creating contest:", error);
    throw error; // Re-throw to be handled by calling code
  }
}

export async function getContests() {
  try {
    const snapshot = await getDocs(collection(db, "contests"));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting contests:", error);
    throw error; // Re-throw to be handled by calling code
  }
}
