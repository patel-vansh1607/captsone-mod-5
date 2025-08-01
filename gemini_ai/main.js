
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Your login/auth route (sample)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Add login logic here
  res.json({ message: `Welcome, ${username}!` });
});

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// AI route
app.post('/api/content', async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: 'Question is required' });

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: question }] }]
    });

    const output = result.response.text();
    res.json({ result: output });
  } catch (err) {
    console.error('❌ Error generating content:', err);
    res.status(500).json({ error: 'Failed to generate content' });
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('Backend with Login & Gemini AI is running.');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is live at http://localhost:${PORT}`);
});
