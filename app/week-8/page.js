"use client"

import { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page(){

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