import { useEffect, useState } from "react";
import { getCategories } from "../../services/productService";
import useCategoryStore from "../../store/categoryStore";

const CATEGORY_LABELS = {
  all: "Todas",
  "men's clothing": "Hombre",
  "women's clothing": "Mujer",
  jewelery: "Joyería",
  electronics: "Electrónica",
};

export default function CategoryFilter() {
  const [categories, setCategories] = useState([]);
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const setSelectedCategory = useCategoryStore((state) => state.setSelectedCategory);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(["all", ...data]);
    });
  }, []);

  const getLabel = (cat) => CATEGORY_LABELS[cat] || cat;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => {
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all capitalize ${
              isActive
                ? "bg-purple-600 text-white border-purple-600 shadow-md"
                : "bg-white text-gray-700 border-gray-300 hover:border-purple-400 hover:text-purple-600"
            }`}
          >
            {getLabel(category)}
          </button>
        );
      })}
    </div>
  );
}