export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-primary">EZShop</h1>

      <ul className="flex gap-6 text-gray-600">
        {["Home", "Women", "Men", "Products", "Contact"].map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-primary transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}