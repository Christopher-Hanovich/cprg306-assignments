"use client";
import { useState } from "react";

export function generateRandomString(length) {
  let result = "";
  while (result.length < length) {
    result += Math.random().toString(36);
  }
  return result.substring(0, length);
}

export default function NewItem({ onAddItem }) {
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

    const newItem = { id: generateRandomString(16), name, quantity, category };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };
  

  return (
    <div>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white p-4 shadow-md w-full  mx-auto"
      
     
    
    >
    <h1 className=" font-light  text-gray">Item Name</h1>
      <input
        type="text"
        placeholder="e.g, milk, 4 L 🥛"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg p-2 w-full text-black"
      />
      
      <h1 className=" font-light  text-gray">Quantity (1-20)</h1>
     

      <div className="flex items-center gap-2 text-black font-extrabold ">
      <h1 className=" font-light  text-black">Current: </h1>  
      <span className="w-16 ">{quantity}</span>
      </div>
      <div className="flex space-x-2">
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
        </div>
        <h1 className=" font-light  text-gray">Category</h1>

        <div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className=" border p-2 rounded  text-black font-light w-full "
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
        className="bg-green-600 text-white py-2 rounded hover:bg-green-700 w-fit px-6"
      >
        Add Item
      </button>
    </form>
    </div>
  );
  
}
