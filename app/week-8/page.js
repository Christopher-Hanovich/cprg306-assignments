"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

function cleanItemName(name) {
  if (!name) return "";
  // remove emoji (from SO answer linked in assignment)
  const emojiRegex =
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g;
  let cleaned = name.replace(emojiRegex, "");
  // remove anything after a comma (like ", 1 kg") and trim
  cleaned = cleaned.split(",")[0].trim();
  // collapse multiple spaces and lowercase
  cleaned = cleaned.replace(/\s+/g, " ").toLowerCase();
  return cleaned;
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  function handleItemSelect(itemName) {
    const cleaned = cleanItemName(itemName);
    setSelectedItemName(cleaned);
  }

  return (
    <main className="p-6">
      <div>   
     <h1 className=" font-bold text-xl mb-6 pl-63">Shopping List + Meal Ideas</h1>
    </div>

      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
