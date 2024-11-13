"use client"

import { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page(){

    const { user } = useUserAuth();
    const [items, setitems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setitems([...items, newItem]);
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