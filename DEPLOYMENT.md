# 🚀 Deployment Guide - Cinelove Platform

Deploy your Cinelove platform using Render (backend) and Vercel (frontend).

## 📋 Prerequisites

1. **GitHub Repository**: Your code should be pushed to GitHub
2. **MongoDB Atlas**: Set up a cloud MongoDB database
3. **TMDB API Key**: Get your API key from [TMDB](https://www.themoviedb.org/settings/api)

## 🔧 Backend Deployment (Render)

### Step 1: Create MongoDB Atlas Database
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster (free tier available)
3. Create a database user and get connection string
4. Whitelist all IP addresses (0.0.0.0/0) for Render

### Step 2: Deploy to Render
1. Go to [Render.com](https://render.com) and sign up
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `HARSHARORA2812/Cinelove`
4. Configure deployment:
   ```
   Name: cinelove-backend
   Root Directory: backend-node
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

### Step 3: Set Environment Variables in Render
Add these environment variables in Render dashboard:
```env
NODE_ENV=production
PORT=10000
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/cinelove_db
DB_NAME=cinelove_db
TMDB_API_KEY=your_tmdb_api_key_here
CORS_ORIGINS=https://your-frontend-domain.vercel.app
```

### Step 4: Deploy
- Click **"Create Web Service"**
- Wait for deployment (5-10 minutes)
- Your backend will be available at: `https://cinelove-backend.onrender.com`

## 🎨 Frontend Deployment (Vercel)

### Step 1: Deploy to Vercel
1. Go to [Vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"New Project"**
3. Import your repository: `HARSHARORA2812/Cinelove`
4. Configure deployment:
   ```
   Framework Preset: Vite
   Root Directory: Frontend
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

### Step 2: Set Environment Variables in Vercel
Add this environment variable:
```env
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```

### Step 3: Deploy
- Click **"Deploy"**
- Wait for deployment (2-3 minutes)
- Your frontend will be available at: `https://cinelove-frontend.vercel.app`

## 🔄 Update CORS Configuration

After getting your Vercel URL, update the backend environment variable:
1. Go to Render dashboard → Your service → Environment
2. Update `CORS_ORIGINS` to your Vercel URL:
   ```env
   CORS_ORIGINS=https://your-actual-vercel-url.vercel.app
   ```
3. Redeploy the backend service

## ✅ Testing Deployment

### Backend Testing
```bash
# Test backend health
curl https://your-backend-url.onrender.com/api/health

# Test movies endpoint
curl https://your-backend-url.onrender.com/api/movies/popular
```

### Frontend Testing
1. Visit your Vercel URL
2. Check browser console for any errors
3. Test movie search and browsing functionality
4. Verify API calls are working

## 🔧 Troubleshooting

### Common Issues:

1. **CORS Errors**:
   - Ensure `CORS_ORIGINS` matches your Vercel URL exactly
   - Include `https://` in the URL

2. **Database Connection**:
   - Check MongoDB Atlas connection string
   - Verify database user permissions
   - Ensure IP whitelist includes 0.0.0.0/0

3. **API Key Issues**:
   - Verify TMDB API key is correct
   - Check API key permissions

4. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json

## 📊 Deployment URLs

After successful deployment, you'll have:

- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-service.onrender.com`
- **API Health**: `https://your-service.onrender.com/api/health`

## 🎉 Success!

Your Cinelove platform is now live and accessible worldwide! 🌍

### Next Steps:
1. Test all functionality thoroughly
2. Monitor performance and logs
3. Set up custom domain (optional)
4. Add analytics and monitoring
5. Share your live project! 🚀

---

**Note**: Render free tier may have cold starts (30-60 seconds delay for first request after inactivity). Consider upgrading for production use.
