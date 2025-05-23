import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductsStore } from "../store/useProductsStore";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { products, loading, error, fetchProducts } = useProductsStore();

  useEffect(() => {
    console.log("HomePage mounted, fetching products...");
    fetchProducts();
  }, [fetchProducts]);

  console.log("HomePage render:", { products, loading, error });

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

  // Get featured products (first 4 products)
  const featuredProducts = products?.slice(0, 4) || [];

  // Define categories with their images
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop&q=60",
      link: "/products?category=Electronics"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60",
      link: "/products?category=Accessories"
    },
    {
      name: "Home & Living",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60",
      link: "/products?category=Home & Living"
    },
    {
      name: "Gaming",
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800&auto=format&fit=crop&q=60",
      link: "/products?category=Gaming"
    },
    {
      name: "Audio",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
      link: "/products?category=Audio"
    },
    {
      name: "Photography",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
      link: "/products?category=Photography"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
          Discover our latest collection of premium products at unbeatable prices.
        </p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Shop Now
        </Link>
      </section>

      {/* Featured Products Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;