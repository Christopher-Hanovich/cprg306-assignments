"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-service";

function cleanItemName(name) {
  if (!name) return "";
  const emojiRegex =
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g;
  let cleaned = name.replace(emojiRegex, "");
  cleaned = cleaned.split(",")[0].trim();
  cleaned = cleaned.replace(/\s+/g, " ").toLowerCase();
  return cleaned;
}

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
      return;
    }
    async function loadItems() {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
    loadItems();
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    const addedItem = { id, ...newItem };
    setItems((prev) => [...prev, addedItem]);
  };

  function handleItemSelect(itemName) {
    const cleaned = cleanItemName(itemName);
    setSelectedItemName(cleaned);
  }

  return (
    <main className="p-6">
      <div>
        <h1 className="font-bold text-xl mb-6 pl-63">
          Shopping List + Meal Ideas
        </h1>
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
