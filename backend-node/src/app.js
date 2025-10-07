const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

// Import middleware
const corsMiddleware = require('./middleware/cors');
const rateLimiter = require('./middleware/rateLimiter');
const requestLogger = require('./middleware/logger');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

// Import routes
const apiRoutes = require('./routes');

// Import database connection
const { connectToMongoDB } = require('./config/database');

const app = express();

// Security and performance middleware
app.use(helmet());
app.use(compression());
app.use(corsMiddleware);

// Rate limiting
app.use('/api/', rateLimiter);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use(requestLogger);

// API routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use(errorHandler);
app.use('*', notFoundHandler);

// Database connection and server startup
const startServer = async () => {
    try {
        await connectToMongoDB();
        
        const PORT = process.env.PORT || 8001;
        app.listen(PORT, () => {
            console.log(`🎬 Cinelove API (Node.js) running on http://localhost:${PORT}`);
            console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
            console.log(`🎭 TMDB configured: ${!!process.env.TMDB_API_KEY}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down gracefully...');
    process.exit(0);
});

module.exports = { app, startServer };
