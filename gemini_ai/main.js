const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors({
  origin: '*', // For local testing, allow all origins. Change in production.
  methods: ['GET', 'POST'],
}));
app.use(bodyParser.json());

// ✅ Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  res.json({ message: `Welcome, ${username}!` });
});

// ✅ Initialize Gemini (check API key)
let model;
try {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
} catch (err) {
  console.error('❌ Error initializing Gemini model:', err.message);
}

// ✅ AI route
app.post('/api/content', async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: 'Question is required' });

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: question }] }],
    });

    const output = await result.response.text(); // ✅ Important: `await` here
    res.json({ result: output });
  } catch (err) {
    console.error('❌ Error generating content:', err);
    res.status(500).json({ error: 'Failed to generate content', details: err.message });
  }
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send('✅ Backend with Login & Gemini AI is running.');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is live at http://localhost:${PORT}`);
});
