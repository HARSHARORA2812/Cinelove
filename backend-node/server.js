#!/usr/bin/env node

/**
 * Cinelove API Server - Modular Architecture
 * 
 * This is the main entry point for the modular version of the Cinelove API.
 * The application is now organized into proper modules for better maintainability.
 */

const { startServer } = require('./src/app');

// Start the server
if (require.main === module) {
    startServer();
}
