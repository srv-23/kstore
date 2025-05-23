import { Link } from 'react-router-dom';
import { useThemeStore } from '../store/useThemeStore';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const { theme } = useThemeStore();

  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">KStore</h3>
            <p className="text-sm opacity-80">
              Your one-stop shop for all your needs. Quality products, great
              prices, and excellent service.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/products" className="hover:text-primary">Products</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@kstore.com" className="hover:text-primary">
                  contact@kstore.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:support@kstore.com" className="hover:text-primary">
                  support@kstore.com
                </a>
              </li>
              <li>123 Tech Park, Sector 62</li>
              <li>Noida, Uttar Pradesh 201301</li>
              <li>India</li>
              <li>Phone: +91 98765 43210</li>
              <li>Toll Free: +91 1800 123 4567</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-base-300 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} KStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 