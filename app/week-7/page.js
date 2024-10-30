"use client"

import { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item";

export default function Page(){

    const [items, setitems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setitems([...items, newItem]);
    };

    return(
        <main>
            <h1 className = "text-4xl m-2 mb-4 font-bold font-sans" >Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    );
}