import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About KStore</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welcome to KStore, your one-stop destination for high-quality products at competitive prices.
          We are committed to providing an exceptional shopping experience with a wide range of products
          and outstanding customer service.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-6">
          Founded in 2024, KStore started with a simple mission: to provide customers with the best shopping experience possible.
          We believe in quality, affordability, and excellent customer service. Our journey began with a small team
          of passionate individuals who wanted to revolutionize the online shopping experience in India.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Quality Products - We carefully select each product to ensure the highest quality standards</li>
          <li>Competitive Prices - We offer the best prices without compromising on quality</li>
          <li>Excellent Customer Service - Our dedicated team is always ready to assist you</li>
          <li>Fast Shipping - Quick and reliable delivery across India</li>
          <li>Secure Shopping - Your security and privacy are our top priorities</li>
          <li>Sustainable Practices - We are committed to eco-friendly business operations</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="mb-6">
          At KStore, we are committed to providing a seamless shopping experience. We continuously work on
          improving our services, expanding our product range, and enhancing customer satisfaction. Our goal
          is to become the most trusted online shopping destination in India.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-base-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Head Office</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Address:</p>
                  <p>123 Tech Park, Sector 62</p>
                  <p>Noida, Uttar Pradesh 201301</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <p>contact@kstore.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-base-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
            <p className="mb-4">
              Our customer support team is available to assist you with any questions or concerns.
              We strive to respond to all inquiries within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <p>+91 1800 123 4567 (Toll Free)</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <p>support@kstore.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/products" className="btn btn-primary">
            Browse Our Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 