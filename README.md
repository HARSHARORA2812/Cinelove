# 🎬 Cinelove - Movie Review Platform

A comprehensive movie review platform focused on Indian cinema with smart OTT recommendations and theater booking integration.

## ✨ Features

- 🎭 **Movie Discovery** - Search and browse movies from TMDB database
- 🇮🇳 **Indian Cinema Focus** - Special support for Bollywood, Tollywood, Kollywood, and regional cinema
- 📺 **Smart OTT Integration** - Netflix, Amazon Prime, Disney+ Hotstar, ZEE5, SonyLIV recommendations
- 🎫 **Theater Booking** - Direct links to BookMyShow, Paytm, PVR, INOX
- ⭐ **User Reviews** - Complete review system with ratings and statistics
- 🎬 **Movie Details** - Cast, crew, trailers, and comprehensive movie information
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with modern features

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for reviews and user data
- **TMDB API** - Movie database integration
- **Modular Architecture** - Clean, maintainable code structure

## 📁 Project Structure

```
Cinelove/
├── Frontend/                 # React frontend application
│   ├── src/
│   │   ├── App.jsx          # Main application component
│   │   ├── components/      # Reusable UI components
│   │   └── main.jsx         # Application entry point
│   ├── package.json
│   └── vite.config.js
├── backend-node/            # Node.js Express backend
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # External API integrations
│   │   ├── middleware/      # Express middleware
│   │   ├── routes/          # API route definitions
│   │   ├── utils/           # Utility functions
│   │   └── config/          # Configuration files
│   ├── server.js           # Main server entry point
│   └── package.json
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- TMDB API key

### 1. Clone the Repository
```bash
git clone https://github.com/HARSHARORA2812/Cinelove.git
cd Cinelove
```

### 2. Setup Backend
```bash
cd backend-node
npm install
cp .env.example .env
# Add your TMDB API key and MongoDB URL to .env
npm start
```

### 3. Setup Frontend
```bash
cd ../Frontend
npm install
npm run dev
```

### 4. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8001
- **API Health**: http://localhost:8001/api/health

## 🔧 Environment Variables

Create `.env` file in `backend-node/` directory:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=cinelove_db
TMDB_API_KEY=your_tmdb_api_key_here
CORS_ORIGINS=http://localhost:5173
PORT=8001
```

## 📊 API Endpoints

### Movies
- `GET /api/movies/popular` - Popular movies worldwide
- `GET /api/movies/indian` - Indian cinema collection
- `GET /api/movies/now-playing` - Currently in theaters
- `GET /api/movies/daily-recommendations` - Daily curated picks
- `GET /api/movies/search?query={query}` - Search movies
- `GET /api/movies/{id}` - Movie details
- `GET /api/movies/{id}/credits` - Cast and crew
- `GET /api/movies/{id}/videos` - Trailers and videos

### Reviews
- `POST /api/movies/{id}/reviews` - Create review
- `GET /api/movies/{id}/reviews` - Get movie reviews
- `GET /api/reviews/latest` - Latest reviews

### Genres & Discovery
- `GET /api/genres` - Available genres
- `GET /api/languages` - Supported languages
- `GET /api/discover` - Advanced movie discovery

## 🎯 Key Features

### Smart Platform Integration
- **OTT Platforms**: Automatic detection of availability on Netflix, Prime, Hotstar, etc.
- **Theater Booking**: Direct integration with BookMyShow, Paytm, PVR, INOX
- **Language Support**: Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, and more

### Indian Cinema Focus
- **Regional Cinema**: Support for all major Indian film industries
- **Language Filtering**: Browse movies by Indian languages
- **Cultural Context**: Tailored recommendations for Indian audience

### Modern Architecture
- **Modular Backend**: Clean separation of concerns
- **RESTful API**: Standard HTTP methods and status codes
- **Error Handling**: Comprehensive error responses
- **Security**: CORS, rate limiting, input validation

## 🧪 Testing

### Backend API Testing
```bash
# Health check
curl http://localhost:8001/api/health

# Get popular movies
curl http://localhost:8001/api/movies/popular

# Search movies
curl "http://localhost:8001/api/movies/search?query=dangal"
```

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to Heroku, Vercel, or your preferred platform

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy to Netlify, Vercel, or your preferred platform
3. Update API base URL for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for movie data
- [React](https://reactjs.org/) for the frontend framework
- [Express.js](https://expressjs.com/) for the backend framework
- [MongoDB](https://www.mongodb.com/) for database services

## 📞 Contact

**Harsh Arora** - [@HARSHARORA2812](https://github.com/HARSHARORA2812)

Project Link: [https://github.com/HARSHARORA2812/Cinelove](https://github.com/HARSHARORA2812/Cinelove)

---

⭐ **Star this repository if you found it helpful!**
