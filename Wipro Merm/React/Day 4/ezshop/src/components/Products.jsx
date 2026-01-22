export default function Products() {
  const products = ["Hoodie", "Belt", "Shoes", "Hat"];

  return (
    <section className="px-10 mb-10">
      <h2 className="text-2xl font-bold mb-6">Sale Products</h2>

      <div className="grid grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item}
            className="
              bg-gray-100 p-10 text-center
              hover:scale-105
              hover:shadow-xl
              transition-transform
              cursor-pointer
            "
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
