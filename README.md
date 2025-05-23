# KStore - Modern E-commerce Platform

A full-stack e-commerce platform built with React, Node.js, and PostgreSQL (Neon Database).

## Features

- 🛍️ **Product Catalog**
  - Browse products by categories
  - Search functionality
  - Detailed product views
  - Responsive product grid

- 🛒 **Shopping Cart**
  - Add/remove items
  - Update quantities
  - Real-time price calculations
  - Persistent cart state

- 👤 **User Authentication**
  - Secure login/signup
  - User profile management
  - Order history

- 🎨 **Modern UI/UX**
  - Responsive design
  - Dark/Light theme
  - Smooth animations
  - Intuitive navigation

## Tech Stack

### Frontend
- React 18
- Vite
- Zustand (State Management)
- React Router
- Tailwind CSS
- DaisyUI
- Lucide Icons

### Backend
- Node.js
- Express.js
- PostgreSQL (Neon Database)
- JWT Authentication
- CORS enabled

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database (Neon Database)

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/kstore.git
cd kstore
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Create a `.env` file in the backend directory
```env
# Database Configuration
PGHOST=your-neon-host
PGDATABASE=your-database
PGUSER=your-username
PGPASSWORD=your-password

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
```

4. Install frontend dependencies
```bash
cd ../frontend
npm install
```

5. Start the development servers

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Deployment

### Deploying to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: kstore-backend
   - **Environment**: Node
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Node Version**: 18.x

4. Add the following environment variables in Render's dashboard:
   ```
   PGHOST=your-neon-host
   PGDATABASE=your-database
   PGUSER=your-username
   PGPASSWORD=your-password
   PORT=5000
   NODE_ENV=production
   JWT_SECRET=your-secret-key
   JWT_EXPIRES_IN=7d
   ```

5. Deploy the frontend:
   - Create a new Static Site on Render
   - Connect your GitHub repository
   - Configure the service:
     - **Build Command**: `cd frontend && npm install && npm run build`
     - **Publish Directory**: `frontend/dist`
   - Add the following environment variable:
     ```
     VITE_API_URL=https://your-backend-url.onrender.com
     ```

## Project Structure

```
kstore/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── layouts/
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── config/
│   ├── seeds/
│   └── package.json
└── README.md
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:category` - Get products by category

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove item from cart

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Neon Database](https://neon.tech/) 