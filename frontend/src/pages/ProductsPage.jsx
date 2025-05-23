import { useEffect } from 'react';
import { useProductsStore } from '../store/useProductsStore.jsx';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const { products, loading, error, fetchProducts } = useProductsStore();
  const category = searchParams.get("category");

  useEffect(() => {
    console.log("ProductsPage mounted, fetching products...");
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-error mb-4">Error Loading Products</h2>
        <p className="text-base-content/70 mb-4">{error}</p>
        <button onClick={fetchProducts} className="btn btn-primary">
          Try Again
        </button>
      </div>
    );
  }

  // Filter products by category if specified
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  // Get unique categories for the filter
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 space-y-6">
          <div className="bg-base-200 p-4 rounded-lg">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              <a
                href="/products"
                className={`block px-3 py-2 rounded-lg hover:bg-base-300 ${
                  !category ? "bg-primary text-primary-content" : ""
                }`}
              >
                All Products
              </a>
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`/products?category=${cat}`}
                  className={`block px-3 py-2 rounded-lg hover:bg-base-300 ${
                    category === cat ? "bg-primary text-primary-content" : ""
                  }`}
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-8">
            <SearchBar />
          </div>

          {category && (
            <h1 className="text-2xl font-bold mb-6">{category}</h1>
          )}

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-base-content/70">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 