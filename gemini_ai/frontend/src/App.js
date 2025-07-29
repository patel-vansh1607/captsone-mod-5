import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3000/api/content', {
        question: question,
      });
      setResponse(res.data.result);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Failed to get response from the server.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>💬 Ask Gemini AI</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
        style={{ padding: '10px', width: '400px', fontSize: '16px' }}
      />
      <button
        onClick={handleAsk}
        style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px' }}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Ask'}
      </button>

      <div style={{ marginTop: '30px' }}>
        <h2>Response:</h2>
        <div style={{ whiteSpace: 'pre-wrap' }}>{response}</div>
      </div>
    </div>
  );
};

export default App;
