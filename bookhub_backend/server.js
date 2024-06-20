const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Assuming you have a db.js file for database connection
const bookRoutes = require('./routes/bookRoutes');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config(); // Load environment variables from .env file

// Connect to MongoDB using Mongoose
connectDB(); // Function to connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/books', bookRoutes);

// Serve static assets in production (React frontend)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('bookhub_frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'bookhub_frontend', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
