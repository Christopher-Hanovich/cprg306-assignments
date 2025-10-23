"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];
  sortedItems.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <main>
      <div className="flex justify-center gap-4 my-4">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded text-white ${
            sortBy === "name" ? "bg-blue-600" : "bg-blue-400"
          }`}
        >
          Name
        </button>
        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded text-white ${
            sortBy === "category" ? "bg-blue-600" : "bg-blue-400"
          }`}
        >
          Category
        </button>
      </div>
      <div className="text-center mb-4">
        <p>Sorting by: {sortBy}</p>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
