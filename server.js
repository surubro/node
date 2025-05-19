require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// POST route to verify password and send secret data if correct
app.post('/verify-password', (req, res) => {
  const { password } = req.body;

  if (password === process.env.SECRET_PASSWORD) {
    res.json({
      success: true,
      secretData: {
        I: "8591815338",
        S: "9137267873"
      }
    });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
