import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductList() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  // Fetch products and filter client-side by category
  useEffect(() => {
    const fetchProducts = () => {
      fetch("http://localhost:3002/products")
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((p) => {
            if (!p.category) return true;
            return p.category.toLowerCase() === category.toLowerCase();
          });
          setProducts(filtered);
        })
        .catch((err) => console.log(err));
    };

    fetchProducts();
  }, [category]);

  // ADD product
  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return alert("Name and price are required!");
    fetch("http://localhost:3002/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newProduct, category }),
    }).then(() => {
      setNewProduct({ name: "", price: "", description: "", image: "" });
      fetch("http://localhost:3002/products")
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((p) => {
            if (!p.category) return true;
            return p.category.toLowerCase() === category.toLowerCase();
          });
          setProducts(filtered);
        });
    });
  };

  // DELETE product
  const deleteProduct = (id) => {
    fetch(`http://localhost:3002/products/${id}`, { method: "DELETE" }).then(() => {
      setProducts(products.filter((p) => p.id !== id));
    });
  };

  // UPDATE product name (simple example)
  const updateProduct = (id) => {
    const updatedName = prompt("Enter new product name:");
    if (!updatedName) return;
    fetch(`http://localhost:3002/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: updatedName }),
    }).then(() => {
      setProducts(
        products.map((p) => (p.id === id ? { ...p, name: updatedName } : p))
      );
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        {category.toUpperCase()} Products
      </h2>

      {/* Add Product Form */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2 rounded w-full md:w-1/4"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border p-2 rounded w-full md:w-1/4"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          className="border p-2 rounded w-full md:w-1/4"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          className="border p-2 rounded w-full md:w-1/4"
        />
        <button
          onClick={addProduct}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Add Product
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 && <p className="text-center col-span-full">No products in this category</p>}
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition flex flex-col"
          >
            <img
              src={p.image || "https://via.placeholder.com/300"}
              alt={p.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col grow">
              <h3 className="text-lg font-bold mb-2">{p.name}</h3>
              <p className="text-gray-700 mb-2">{p.description}</p>
              <p className="text-pink-500 font-bold mb-2">₹{p.price}</p>
              <div className="mt-auto flex gap-2">
                <button
                  onClick={() => updateProduct(p.id)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
