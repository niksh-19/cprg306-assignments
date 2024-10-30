"use client"

import { useState } from "react";
import Item from "./item";


export default function ItemList({items}){

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a,b) => {
    if (sortBy == "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy == "category") {
      return a.category.localeCompare(b.category);
    }
  });

  const groupedItems = items.reduce((acc, item) => {
    const {category} = item;
    if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {});

    const renderItems = () => {
      if (sortBy === "grouped") {
        return Object.keys(groupedItems)
          .sort()
          .map((category) => (
            <div key={category}>
              <h3 className="capitalize text-xl mb-3">{category}</h3>
              <ul className="list-disc ml-6">
                {groupedItems[category]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <Item key={item.id} {...item} />
                  ))}
              </ul>
            </div>
          ));
      } else {
        return sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ));
      }
    };

  const buttonClass = (active) =>
    `px-4 py-2 m-2 border rounded cursor-pointer ${
      active ? "bg-teal-500 text-white border-teal-500" : "bg-gray-100 text-gray-800 border-gray-400"
    }`;
      
  return(
        <div>
          <div>
            <button onClick={() => setSortBy("name")} className={buttonClass(sortBy == "name")}> Sort by Name</button>
            <button onClick={() => setSortBy("category")} className={buttonClass(sortBy == "category")}> Sort by Category</button>
            <button
              onClick={() => setSortBy("grouped")}
              className={buttonClass(sortBy === "grouped")}
            >
            Group by Category
            </button>
          </div>
          {renderItems()}
        </div>
      );
};