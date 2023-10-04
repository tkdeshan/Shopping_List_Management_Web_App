const express = require('express');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', itemRoutes);

const dbURI = process.env.MONGODB_URI;

async function connectToMongoDB() {
  try {
    // Attempt to connect to MongoDB using Mongoose
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Exit the application if the connection fails
    process.exit(1);
  }
}

// Call the async function to connect to MongoDB
connectToMongoDB();

app.listen(PORT, () => {
  console.log(`The server is running http://localhost:${PORT}`);
});
