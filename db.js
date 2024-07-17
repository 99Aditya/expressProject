const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/pos');
        // console.log('Connected to MongoDB');
        
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); 
    }
  
};
  module.exports = connectDB;