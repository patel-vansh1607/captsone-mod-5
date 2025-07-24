import Navbar from './components/Navbar';
import './App.css'
import React, { useState } from 'react';
function App() {
    const [isYearly, setIsYearly] = useState(true);
  return (
    <div>
      <Navbar />
      <section className="promo-section">
      <h1 className="promo-title">The Simplified Art of Productive Living</h1>
      <p className="promo-subtext">
        Make each count with effortless organization, ensuring productivity and purpose every day
      </p>
      <div className="promo-buttons">
        <a href="#" className="store-button app-store">
          <i className="fab fa-apple"></i> App Store
        </a>
        <a href="#" className="store-button play-store">
          <i className="fab fa-google-play"></i> Play Store
        </a>
      </div>
      </section>

      <section className="pricing-section">
      <h2 className="pricing-title">Pricing</h2>

      <div className="billing-toggle">
        <span className="free-label">get 3 months free</span>
        <span>Billed Yearly</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={!isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <span className="slider round"></span>
        </label>
        <span>Billed Monthly</span>
      </div>

      <div className="pricing-cards">
        {/* Free Plan */}
        <div className="card">
          <h3>Standard</h3>
          <h1>Free</h1>
          <ul>
            <li>Basic features included ✔️</li>
            <li>Unlimited tasks ✔️</li>
            <li>Basic priority levels ✔️</li>
            <li>Basic reminders ✔️</li>
          </ul>
          <button className="btn-outline">Get Started</button>
        </div>

        {/* Pro Plan */}
        <div className="card pro">
          <h3>Pro</h3>
          <h1>${isYearly ? '75' : '8'}<span className="year-label">/{isYearly ? 'year' : 'mo'}</span></h1>
          <ul>
            <li>Advanced task management ✔️</li>
            <li>Enhanced priority levels ✔️</li>
            <li>Advanced categorization ✔️</li>
            <li>Customizable reminders ✔️</li>
            <li>Collaboration features ✔️</li>
            <li>Offline access ✔️</li>
            <li>Advanced tagging ✔️</li>
            <li>Priority customer support ✔️</li>
          </ul>
          <button className="btn-fill">Buy Now</button>
        </div>
      </div>
    </section>

    <div className="newsletter-container">
      <h2 className="newsletter-title">Sign up to our newsletter</h2>
      <p className="newsletter-subtitle">
        Receive latest news, updates and many other news every week.
      </p>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email address"
          className="newsletter-input"
        />
        <button type="submit" className="newsletter-button">
          ➤
        </button>
      </form>
    </div>
    </div>
  );
}

export default App;
