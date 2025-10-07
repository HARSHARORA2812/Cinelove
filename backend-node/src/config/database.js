const { MongoClient } = require('mongodb');

let db;

const connectToMongoDB = async () => {
    try {
        const mongoUrl = process.env.MONGO_URL;
        const dbName = process.env.DB_NAME;
        
        const client = new MongoClient(mongoUrl);
        await client.connect();
        db = client.db(dbName);
        console.log('Connected to MongoDB');
        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

const getDatabase = () => {
    if (!db) {
        throw new Error('Database not initialized. Call connectToMongoDB first.');
    }
    return db;
};

module.exports = {
    connectToMongoDB,
    getDatabase
};
