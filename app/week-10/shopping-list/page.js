"use client"

import { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service"; 

export default function Page(){

    const { user } = useUserAuth();
    const [items, setitems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    async function loadItems() {
        if (user) {
            try {
                const userItems = await getItems(user.uid);
                setitems(userItems);
            } catch (error) {
                console.error("Error loading items:", error);
            }
        }
    }

    useEffect(() => {
        loadItems();
    }, [user]);

    async function handleAddItem(newItem) {
        if (user) {
            try {
                const addedItem = await addItem(user.uid, newItem);
                setitems(prevItems => [...prevItems, {...addedItem, id: addedItem.id}]);
            } catch (error) {
                console.error("Error adding item:", error);
            }
        }
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName
            .split(",")[0]
            .trim()
            .replace(/[\p{Emoji_Presentation}\u200d]/gu, '') 
            .replace(/[^\p{L}\p{N}\s]/gu, '');
        setSelectedItemName(cleanedName);
    }

    if (!user) {
        return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <p>You must be logged in to view this page.</p>
            <Link href="/week-9">Click here to return to the sign in page</Link>
          </div>
        );
      }

    return(
        <main className="flex">
            <div className="w-1/3">
            <h1 className = "text-4xl m-2 mb-4 font-bold font-sans" >Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div className=" mt-20">
            <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}