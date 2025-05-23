import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <AlertTriangle className="w-16 h-16 text-warning mb-4" />
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-base-content/70 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="space-x-4">
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
          <Link to="/products" className="btn btn-outline">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 