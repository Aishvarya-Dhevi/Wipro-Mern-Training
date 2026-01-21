import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-pink-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to EZShop</h1>
        <p className="text-lg">
          Shop the latest trends in fashion and lifestyle
        </p>
      </div>

      {/* Product Categories */}
      <h2 className="text-2xl font-bold mt-10 text-center">
        Product Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {/* Card 1 */}
        <div className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <img
             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
      alt="Accessories"
            className="w-full h-48 object-cover"
          />
          <p className="text-center font-bold py-2 bg-pink-400 text-white">
            Accessories
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      alt="Shoes"
            className="w-full h-48 object-cover"
          />
          <p className="text-center font-bold py-2 bg-pink-400 text-white">
            Shoes
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
      alt="Jackets"
            className="w-full h-48 object-cover"
          />
          <p className="text-center font-bold py-2 bg-pink-400 text-white">
            Jackets
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
      alt="Watches"
            className="w-full h-48 object-cover"
          />
          <p className="text-center font-bold py-2 bg-pink-400 text-white">
            Watches
          </p>
        </div>
      </div>

      {/* Sale Categories */}
      <h2 className="text-2xl font-bold mt-10 text-center">
        Sale Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {/* Card 1 */}
        <div className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <img
             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
      alt="Accessories"
            className="w-full h-48 object-cover"
          />
          <p className="text-center font-bold py-2 bg-pink-400 text-white">
            Accessories
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      alt="Shoes"
            className="w-full h-48 object-cover"
          />
          <p className="text-center font-bold py-2 bg-pink-400 text-white">
            Shoes
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
      alt="Jackets"
            className="w-full h-48 object-cover"
          />
          <p className="text-center font-bold py-2 bg-pink-400 text-white">
            Jackets
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
      alt="Watches"
            className="w-full h-48 object-cover"
          />
          <p className="text-center font-bold py-2 bg-pink-400 text-white">
            Watches
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
