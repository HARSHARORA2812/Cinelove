const errorHandler = (err, req, res, next) => {
    console.error('Unhandled error:', err);
    
    // Default error response
    let statusCode = 500;
    let message = 'Internal server error';
    
    // Handle specific error types
    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = err.message;
    } else if (err.name === 'CastError') {
        statusCode = 400;
        message = 'Invalid ID format';
    } else if (err.code === 11000) {
        statusCode = 409;
        message = 'Duplicate entry';
    }
    
    res.status(statusCode).json({ 
        error: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};

const notFoundHandler = (req, res) => {
    res.status(404).json({ error: 'Route not found' });
};

module.exports = {
    errorHandler,
    notFoundHandler
};
