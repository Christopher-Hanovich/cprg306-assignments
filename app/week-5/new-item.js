'use client';
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");


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

    let item = {
        newName: name,
        newQuantity: quantity,
        newCategory: category
    };

    console.log(`Name: ${name}, quantity: ${quantity}, category: ${category}`);
    alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("Produce");

};
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <form onSubmit={handleSubmit} action="send" method="post" className="inline-block p-5 bg-white rounded-lg shadow-lg">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder=" Item Name" 
                className="w-full font-light text-black outline-1 outline-black px-3 py-2" required />
                
                <div className="flex items-center space-x-2 mt-4 mb-4">
                    <p className="w-14 h-7 rounded-lg text-2xl text-center text-black outline-2 outline-black">{quantity}</p>
                    <button type="button" onClick={decrement} disabled={quantity === 1}
                            className={`w-10 h-10 rounded-lg text-white ${quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}>-
                    </button>
                    <button type="button" onClick={increment} disabled={quantity === 20}
                    className={`w-10 h-10 rounded-lg text-white ${quantity === 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}>+
                    </button>

                    <select value={category} onChange={(e) => setCategory(e.target.value)}className="ml-10 h-8 text-black outline-1 outline-black">
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button type="submit" className={"w-full h-10 rounded-lg text-white bg-blue-500"}>Add Item</button>
            </form>
        </div>
    );
};


