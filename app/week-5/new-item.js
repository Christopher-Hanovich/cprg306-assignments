<<<<<<< HEAD
'use client';
import { useState } from "react";
=======
"use client";
import { useState } from "react";
import Item from "../week-3/item";
>>>>>>> 3c301aa (Added week 5 assignment)

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
<<<<<<< HEAD
  const increment = () => {
        if (quantity <20) {
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
=======
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
>>>>>>> 3c301aa (Added week 5 assignment)
    alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

<<<<<<< HEAD
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

      <div className="flex items-center gap-2 text-black font-extrabold " >
        <span className="border rounded w-16 text-center">{quantity}</span>
=======
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
>>>>>>> 3c301aa (Added week 5 assignment)
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
<<<<<<< HEAD
          className={`px-3 w-10 h-9 rounded text-white ${quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
        >
          -
        </button>
        <button
          type="button"
          onClick={increment} 
          disabled={quantity === 20}
          className={`px-3 w-10 h-9 rounded text-white ${quantity === 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
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
=======
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
>>>>>>> 3c301aa (Added week 5 assignment)
      >
        Add Item
      </button>
    </form>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 3c301aa (Added week 5 assignment)
