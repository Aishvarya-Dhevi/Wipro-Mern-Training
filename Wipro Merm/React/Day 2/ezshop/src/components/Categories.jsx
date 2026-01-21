export default function Categories() {
  const items = ["Accessories", "Shoes", "Jackets", "Sunglasses"];

  return (
    <section className="grid grid-cols-4 gap-6 px-10 my-10">
      {items.map((item) => (
        <div
          key={item}
          className="
            bg-gray-100 p-6 text-center font-semibold
            hover:bg-secondary hover:text-white
            shadow-sm hover:shadow-lg
            transition
            cursor-pointer
          "
        >
          {item}
        </div>
      ))}
    </section>
  );
}
