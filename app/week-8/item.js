"use client";

export default function Item({ item, onSelect }) {
  const { name, quantity, category } = item;
  return (
    <li
      onClick={() => onSelect && onSelect(name)}
      className="cursor-pointer p-3 border rounded-lg hover:bg-blue-50 transition"
    >
      <div className="flex flex-col">
        <span className="text-blue-800 font-bold">{name}</span>
        <span className="text-sm text-gray-600">Quantity: {quantity}</span>
        <span className="text-sm text-gray-600">Category: {category}</span>
      </div>
    </li>
  );
}
