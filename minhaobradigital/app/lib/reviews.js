import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addReview(data) {
  try {
    // Validate review data and add authenticated user ID // Adicionado
    const ref = await addDoc(collection(db, "reviews"), data);
    return ref.id;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
}


export async function getReviews(bookId) {
  try {
    // Fetch reviews from Firestore filtering by bookId // Adicionado e substituído
    // Example using query and where (requires importing query and where from firebase/firestore):
    // const reviewsCollection = collection(db, "reviews");
    // const q = query(reviewsCollection, where("bookId", "==", bookId));
    // const snapshot = await getDocs(q);
    // return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
}
