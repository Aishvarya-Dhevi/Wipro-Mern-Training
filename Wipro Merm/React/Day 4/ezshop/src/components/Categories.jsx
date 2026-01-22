import { useNavigate } from "react-router-dom";

function Categories({ title, categoryList }) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mt-10 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {categoryList.map((c) => (
          <div
            key={c.category}
            className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition cursor-pointer"
            onClick={() => handleCategoryClick(c.category)}
          >
            <img src={c.image} alt={c.name} className="w-full h-48 object-cover" />
            <p className="text-center font-bold py-2 bg-pink-400 text-white">{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;