export default function Hero() {
  return (
    <section className="bg-gray-500 text-white h-87.5 flex items-center px-16">
      <div>
        <h1 className="text-4xl font-bold mb-2">SUMMER COLLECTION</h1>
        <p className="mb-4">COLOR BLOCKING COLLECTION</p>

        <button className="
          bg-primary px-6 py-2 rounded
          hover:bg-blue-700
          focus:outline-none focus:ring-2 focus:ring-blue-300
          active:scale-95
          transition
        ">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}