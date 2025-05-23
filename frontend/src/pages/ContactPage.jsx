import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-base-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-base-content/70">support@kstore.com</p>
                  <p className="text-base-content/70">contact@kstore.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-base-content/70">+91 98765 43210</p>
                  <p className="text-base-content/70">+91 1800 123 4567 (Toll Free)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="mt-1" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-base-content/70">
                    123 Tech Park, Sector 62<br />
                    Noida, Uttar Pradesh 201301<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-base-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              
              <div>
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              
              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full h-32"
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 