import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    toast.success(
      isWishlisted ? 'Removed from wishlist' : 'Added to wishlist'
    );
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-base-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Quick Actions */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary btn-sm text-white"
            aria-label="Add to cart"
          >
            <ShoppingCart size={16} />
          </button>
          <button
            onClick={handleWishlist}
            className={`btn btn-sm ${isWishlisted ? 'btn-error' : 'btn-ghost'}`}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-base-content/70 mb-2 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${Number(product.price).toFixed(2)}</span>
          {product.stock > 0 ? (
            <span className="text-sm text-success">In Stock</span>
          ) : (
            <span className="text-sm text-error">Out of Stock</span>
          )}
        </div>
      </div>

      {/* Sale Badge */}
      {product.discount && (
        <div className="absolute top-2 right-2 bg-error text-white px-2 py-1 rounded-full text-xs font-bold">
          -{product.discount}%
        </div>
      )}
    </Link>
  );
};

export default ProductCard;