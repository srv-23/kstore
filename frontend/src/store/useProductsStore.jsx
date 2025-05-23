import { create } from 'zustand';
import axios from 'axios';

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";

export const useProductsStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  filters: {
    category: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "newest",
  },
  fetchProducts: async () => {
    try {
      console.log("Starting to fetch products...");
      set({ loading: true, error: null });
      console.log("Making API request to /api/products");
      const response = await axios.get("/api/products");
      console.log("API Response received:", response);
      console.log("Response data:", response.data);
      
      // The API returns the array directly, no need to access .data
      const products = response.data;
      console.log("Products data:", products);
      
      set({ products, loading: false });
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ error: error.message, loading: false });
    }
  },
  getProductById: (id) => {
    const state = get();
    return state.products.find((product) => product.id === id);
  },
  getFilteredProducts: () => {
    const { products, filters } = get();
    let filtered = [...products];

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    // Apply price filters
    if (filters.minPrice) {
      filtered = filtered.filter(
        (product) => product.price >= parseFloat(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(filters.maxPrice)
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      default:
        break;
    }

    return filtered;
  },
  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }));
  },
  getCategories: () => {
    const { products } = get();
    return [...new Set(products.map((product) => product.category))];
  },
}));

export const getCategories = (products) => {
  const categories = new Set(products.map(product => product.category));
  return ['all', ...categories];
}; 