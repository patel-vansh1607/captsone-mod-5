import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import '../styles/Gemini_Ai.css'
import Sidebar from './Sidebar';
const suggestedQuestions = [
  "How do I prioritize tasks effectively?",
  "What are the best tools for task management?",
  "How can I avoid procrastination?",
  "What is the Eisenhower Matrix?",
  "How do I delegate tasks in a team?",
  "Tips for managing multiple deadlines?",
  "How to break down a big project into tasks?",
  "What's the Pomodoro Technique?",
];

const Gemini_AI = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const chatEndRef = useRef(null);

  const handleAsk = async (q) => {
    const query = q || question;
    if (!query.trim()) return;

    const userMessage = { type: 'user', text: query };
    setConversation((prev) => [...prev, userMessage]);
    setLoading(true);
    setQuestion('');

    try {
      const res = await axios.post('http://localhost:3000/api/content', {
        question: query,
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

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation, loading]);

  return (
    <>
    <Sidebar/>
    <div className={`app-wrapper ${darkMode ? 'dark' : ''}`}>
      <div className="chat-scroll-area">
        <h1 className="title">💬 Ask Gemini AI</h1>

        <div className="chat-box">
          {conversation.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>
              {msg.type === 'ai' ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          ))}
          {loading && (
            <div className="message ai loading">
              <span className="dot one" />
              <span className="dot two" />
              <span className="dot three" />
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="suggestions">
          <h3>💡 Suggested Questions</h3>
          <div className="suggestion-list">
            {suggestedQuestions.map((q, i) => (
              <button key={i} className="suggestion-btn" onClick={() => handleAsk(q)}>
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bottom-bar">
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

        <div className="input-container">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question..."
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          />
          <button onClick={() => handleAsk()} disabled={loading}>
            {loading ? '...' : 'Ask'}
          </button>
        </div>
      </div>
    </div>

    </>
  );
};

export default Gemini_AI;
