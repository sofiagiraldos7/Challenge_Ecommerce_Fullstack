import axios from "axios";

const API_BASE = "https://fakestoreapi.com";

// Normaliza el shape de FakeStore para que coincida con el contrato
// que ya consumen los componentes (mismo shape que mock_products).
const normalizeProduct = (p) => ({
  id: p.id,
  title: p.title,
  description: p.description,
  price: Number(p.price).toFixed(2), // string "19.99" como en el mock
  rate: p?.rating?.rate ?? 0,
  image: p.image,
  category: p.category, // bonus: útil si luego haces filtros por categoría
});

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}/products`);
    return data
      .map(normalizeProduct)
      .sort((a, b) => Number(a.id) - Number(b.id));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE}/products/${id}`);
    return data ? normalizeProduct(data) : null;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(${API_BASE}/products/categories);
    if (!response.ok) throw new Error(HTTP ${response.status});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};