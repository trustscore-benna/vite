// Line 1: Import Express library
const express = require('express');

// Line 2: Create Express application
const app = express();

// Line 3: Define port number
const PORT = 3000;

// Line 5: Middleware to parse JSON data
app.use(express.json());

// Line 7-9: Health check endpoint
app.get('/api/health', (req, res) => {
  // Send JSON response: {"status": "OK"}
  res.json({ status: 'OK' });
});

// Line 11-13: Start server
app.listen(PORT, () => {
  // Print message when server starts
  console.log(`Server running at http://localhost:${PORT}`);
});