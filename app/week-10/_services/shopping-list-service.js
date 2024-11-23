import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];
    try {
        const itemsRef = collection(db, `users/${userId}/items`);
        const querySnapshot = await getDocs(itemsRef);
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            });
        });
    } catch (error) {
        console.error("Error retrieving items:", error);
    }
    return items;
}

export async function addItem(userId, item) {
    try {
        const itemsRef = collection(db, `users/${userId}/items`);
        const docref = await addDoc(itemsRef, item);
        return docref.id;
    } catch (error) {
        console.error("Error adding item:", error);
    }
}