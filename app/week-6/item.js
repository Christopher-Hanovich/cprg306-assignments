export default function Item({ item }) {
  const { name, quantity, category } = item;
  return (
    <div className="max-w-sm rounded-lg bg-gray-800 mx-auto">
      <ul className="text-center m-4 p-2 ">
        <li className=" text-blue-400 font-bold">{name}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
      </ul>
    </div>
  );
}
