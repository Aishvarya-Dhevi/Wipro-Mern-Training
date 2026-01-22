import Categories from "../components/Categories";
import Footer from "../components/Footer";

export default function Home() {
  // Define the categories for each section
  const productCategories = [
    {
      name: "Accessories",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      name: "Shoes",
      category: "shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      name: "Jackets",
      category: "jackets",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
    {
      name: "Watches",
      category: "watches",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    },
  ];

  const saleCategories = [
    {
      name: "Accessories Sale",
      category: "accessories-sale",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      name: "Shoes Sale",
      category: "shoes-sale",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      name: "Jackets Sale",
      category: "jackets-sale",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
    {
      name: "Watches Sale",
      category: "watches-sale",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
  ];
 
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-pink-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to EZShop</h1>
        <p className="text-lg">Shop the latest trends in fashion and lifestyle</p>
      </div>

      {/* Product Categories */}
      <Categories title="Product Categories" categoryList={productCategories} />

      {/* Sale Categories */}
      <Categories title="Sale Categories" categoryList={saleCategories} />

      {/* Footer */}
    </div>
  );
}
