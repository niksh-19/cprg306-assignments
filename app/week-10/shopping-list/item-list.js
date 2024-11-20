"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy == "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy == "category") {
      return a.category.localeCompare(b.category);
    }
  });

  const renderItems = () => {
    return sortedItems.map((item) => (
      <Item key={item.id} {...item} onSelect={() => onItemSelect(item.name)}/>
    ));
  };

  const buttonClass = (active) =>
    `px-4 py-2 m-2 border rounded cursor-pointer ${
      active ? "bg-teal-500 text-white border-teal-500" : "bg-gray-100 text-gray-800 border-gray-400"
    }`;

  return (
    <div>
      <div>
        <button onClick={() => setSortBy("name")} className={buttonClass(sortBy == "name")}>
          Sort by Name
        </button>
        <button onClick={() => setSortBy("category")} className={buttonClass(sortBy == "category")}>
          Sort by Category
        </button>
      </div>
      {renderItems()}
    </div>
  );
}
