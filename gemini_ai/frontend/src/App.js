  import React, { useState } from 'react';
  import axios from 'axios';
  import './App.css';

  const App = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState([]);
    const [darkMode, setDarkMode] = useState(true);

    const handleAsk = async () => {
      if (!question.trim()) return;

      const userMessage = { type: 'user', text: question };
      setConversation((prev) => [...prev, userMessage]);
      setLoading(true);
      setQuestion('');

      try {
        const res = await axios.post('http://localhost:3000/api/content', {
          question: question,
        });

        const aiMessage = { type: 'ai', text: res.data.result };
        setConversation((prev) => [...prev, aiMessage]);
      } catch (error) {
        console.error('Error:', error);
        setConversation((prev) => [
          ...prev,
          { type: 'ai', text: '❌ Failed to get response from the server.' },
        ]);
      }
      setLoading(false);
    };

    return (
      <div className={`container ${darkMode ? 'dark' : ''}`}>
        <div className="toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider" />
        </label>
        <span className="mode-label">{darkMode ? '🌙 Dark' : '☀️ Light'}</span>
      </div>


        <h1 className="title">💬 Ask Gemini AI</h1>
        <div className="chat-box">
          {conversation.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${msg.type === 'user' ? 'user' : 'ai'}`}
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="message ai loading">
              <span className="dot one" />
              <span className="dot two" />
              <span className="dot three" />
            </div>
          )}
        </div>

        <div className="input-container">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question..."
          />
          <button onClick={handleAsk} disabled={loading}>
            {loading ? '...' : 'Ask'}
          </button>
        </div>
      </div>
    );
  };

  export default App;
