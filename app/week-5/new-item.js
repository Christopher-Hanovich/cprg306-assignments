"use client";
import { useState } from "react";
export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white p-4 rounded-2xl shadow-md w-full max-w-sm mx-auto"
    >
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg p-2 w-full text-black"
      />

      <div className="flex items-center gap-2 text-black font-extrabold ">
        <span className="border rounded w-16 text-center">{quantity}</span>
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-3 w-10 h-9 rounded text-white ${
            quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
          }`}
        >
          -
        </button>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`px-3 w-10 h-9 rounded text-white ${
            quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
          }`}
        >
          +
        </button>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="ml-20 border p-2 rounded  text-black font-light "
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen_foods">Frozen Foods</option>
          <option value="canned_goods">Canned Goods</option>
          <option value="dry_goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="others">Others</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
}
