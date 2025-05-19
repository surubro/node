require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Handle GET '/' if no index.html is present
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST /verify-password to check password
app.post('/verify-password', (req, res) => {
  const { password } = req.body;
  if (password === process.env.SECRET_PASSWORD) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
