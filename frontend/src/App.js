import Navbar from "./components/Navbar";
import "./App.css";
import React, { useState } from "react";
import first_mockup from "./assets/demo-app-1.png";
import second_mockup from "./assets/demo-app-2.png";
import third_mockup from "./assets/demo-app-3.png";
import { Link } from "react-router-dom";
function App() {
  const [isYearly, setIsYearly] = useState(true);
  return (
    <div>
      <Navbar />
      <section className="promo-section">
        <h1 className="promo-title">The Simplified Art of Productive Living</h1>
        <p className="promo-subtext">
          Make each count with effortless organization, ensuring productivity
          and purpose every day
        </p>
        <div className="promo-buttons">
          <Link to="/dashboard" className="store-button app-store">
            <i className="fab fa-apple"></i> App Store
          </Link>
          <a href="#" className="store-button play-store">
            <i className="fab fa-google-play"></i> Play Store
          </a>
        </div>
      </section>
      <img className="mimage" src={first_mockup} alt="Logo" width="900" />
      <div className="hero-container">
        <div className="hero-image">
          <img src={second_mockup} alt="Mobile Mockup" />
        </div>
        <div className="hero-content">
          <h1>
            Simplify Your Workflow,
            <br /> Anytime, Anywhere
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            neque libero. Sed volutpat risus id sem convallis, at sagittis urna.
          </p>
          <button className="learn-more-btn">Learn more</button>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Transform Your Routine for
            <br />
            Productivity and Reflection
          </h1>
          <p>
            Efficiently manage your tasks with our intuitive todo app, ensuring
            smooth organization and enhanced productivity with every click.
          </p>
          <button className="learn-more-btn">Learn more</button>
        </div>

        <div className="hero-image">
          <img src={third_mockup} alt="Todo App UI" />
        </div>
      </div>
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
            <h1>
              ${isYearly ? "75" : "8"}
              <span className="year-label">/{isYearly ? "year" : "mo"}</span>
            </h1>
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
