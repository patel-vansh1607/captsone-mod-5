const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Root route
app.get('/', (req, res) => {
  res.send('Gemini AI Backend is running.');
});

// AI Content Generation Endpoint
app.post('/api/content', async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
