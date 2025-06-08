const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Define Schema and model
const dashboardSchema = new mongoose.Schema({}, { strict: false });
const Dashboard = mongoose.model('Dashboard', dashboardSchema, 'dashboard');

// API route
app.get('/api/dashboard', async (req, res) => {
  const data = await Dashboard.findOne(); // For now, we fetch the first doc
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));