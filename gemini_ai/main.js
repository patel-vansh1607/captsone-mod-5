import React, { useState } from 'react';
import axios from 'axios';

const Gemini_AI = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const res = await axios.post(
        'https://captsone-mod-5.onrender.com/api/content',
        { question: query },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setResponse(res.data.result);
    } catch (error) {
      console.error('❌ Error calling Gemini backend:', error.message);
      setResponse('Failed to get response from Gemini backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Poppins', padding: '2rem' }}>
      <h1>Ask Gemini AI</h1>
      <input
        type="text"
        value={query}
        placeholder="Ask something..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />
      <button onClick={handleAsk} style={{ padding: '10px 20px' }}>
        Ask
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Gemini_AI;
