import { useState } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore.jsx';

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, addItem, removeItem, updateQuantity } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (productId, change) => {
    const item = items.find(item => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + change);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-base-content hover:text-primary"
        aria-label="Open cart"
      >
        <ShoppingCart size={24} />
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {items.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-96 bg-base-100 shadow-lg transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-base-content/50 hover:text-error"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="p-4 overflow-y-auto h-[calc(100vh-200px)]">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-base-content/70">Your cart is empty</p>
                <Link
                  to="/products"
                  className="btn btn-primary btn-sm mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-2 border rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium line-clamp-1">{item.name}</h3>
                      <p className="text-primary font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="btn btn-ghost btn-xs"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="btn btn-ghost btn-xs"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-base-content/50 hover:text-error"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-base-100">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="text-primary font-bold">${total.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="btn btn-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer; 