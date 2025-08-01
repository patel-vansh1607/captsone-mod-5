// EmailReminderForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EmailReminderForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/send-reminder', { email });
      setMessage('✅ Reminder sent!');
      setEmail('');
    } catch (err) {
      setMessage('❌ Error sending reminder.');
    }
  };

  return (
    <div className="email-reminder">
      <h3>📧 Email Reminder</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Send Reminder</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default EmailReminderForm;