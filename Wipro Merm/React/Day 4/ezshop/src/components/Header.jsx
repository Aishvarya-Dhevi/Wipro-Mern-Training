export default function Header() {
  return (
    <header className="bg-gray-900 text-white text-sm px-10 py-2 flex justify-between">
      <p>Free shipping on orders over ₹999</p>
      <p className="cursor-pointer hover:text-secondary transition">
        Login / Register
      </p>
    </header>
  );
}