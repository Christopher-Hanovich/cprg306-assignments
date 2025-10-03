'use client';
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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

    return (
        <div className="flex items-center justify-center space-x-4 mt-4">
            <p className=" text-2xl">{quantity}</p>
            <button 
                onClick={decrement} 
                disabled={quantity === 1}
                className={`w-10 h-10 rounded-lg text-white ${quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
            >-
            </button>
            <button 
                onClick={increment} 
                disabled={quantity === 20}
                className={`w-10 h-10 rounded-lg text-white ${quantity === 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-600'}`}
            >+
            </button>
        </div>
    );
};
