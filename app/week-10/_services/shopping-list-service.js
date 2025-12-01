// Import Firebase Firestore functions
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * Retrieves all items for a specific user from Firestore.
 * @param {string} userId - The user's UID from Firebase Authentication.
 * @returns {Promise<Array>} An array of item objects with id and data.
 */
export async function getItems(userId) {
  const items = [];

  try {
    // Reference the path: users/{userId}/items
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error getting items:", error);
    return [];
  }
}

/**
 * Adds a new item to the user's list in Firestore.
 * @param {string} userId - The user's UID from Firebase Authentication.
 * @param {Object} item - The item object (e.g., { name, quantity, category }).
 * @returns {Promise<string>} The ID of the newly created document.
 */
export async function addItem(userId, item) {
  try {
    // Reference the user's items subcollection
    const itemsRef = collection(db, "users", userId, "items");

    // Add the item to Firestore
    const docRef = await addDoc(itemsRef, item);

    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}
