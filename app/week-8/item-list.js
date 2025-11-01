"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="p-4 w-full ">
      <div className="flex items-center mb-4 space-x-2">
        <h2 className="text-sm font-light text-gray-50">Sort by: </h2>
        <div className="space-x-2">
           <button
        className={`px-3 py-1 rounded transition-colors duration-300
          ${sortBy === "name" ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-gray-100"}`}
        onClick={() => setSortBy("name")}
      >
            Name
          </button>
           <button
        className={`px-3 py-1 rounded 
          ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-white text-black hover:bg-gray-100"}`}
        onClick={() => setSortBy("category")}
      >
            Category
          </button>
        </div>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id || item.name}
            item={item}
            onSelect={(name) => onItemSelect && onItemSelect(name)}
          />
        ))}
      </ul>
    </div>
  );
}
