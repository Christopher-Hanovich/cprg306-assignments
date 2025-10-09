"use client";
import { useState } from "react";
import Item from "../week-3/item";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const categories = [
    { value: "produce", Label: "Produce" },
    { value: "dairy", Label: "Dairy" },
    { value: "bakery", Label: "Bakery" },
    { value: "meat", Label: "Meat" },
    { value: "frozen foods", Label: "Frozen Foods" },
    { value: "canned goods", Label: "Canned Goods" },
    { value: "dry goods", Label: "Dry Goods" },
    { value: "beverages", Label: "Beverages" },
    { value: "snacks", Label: "Snacks" },
    { value: "household", Label: "Household" },
    { value: "other", Label: "Other" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      name,
      quantity,
      category,
    };

    console.log({ item });
    alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-4 mt-4"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item Name"
        className="border border-gray-300 rounded-lg p-2 w-1/3"
        required
      />

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`w-10 h-10 rounded-lg text-white ${
            quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
          }`}
        >
          -
        </button>
        <p className=" text-2xl">{quantity}</p>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`w-10 h-10 rounded-lg text-white ${
            quantity === 20
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-emerald-600"
          }`}
        >
          +
        </button>
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded-lg p-2"
        placeholder="Category"
        required
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.Label}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Add Item
      </button>
    </form>
  );
}
