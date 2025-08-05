import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import first_mockup from '../assets/demo-app-1.png';
import second_mockup from '../assets/demo-app-2.png';
import third_mockup from '../assets/demo-app-3.png';
import '../styles/Main.css';

const LandingPage = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    if (!newsletterEmail) {
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    // Simulate API call or action
    console.log("Subscribed to newsletter:", newsletterEmail);

    setNewsletterMessage("Thank you for subscribing!");
    setNewsletterEmail('');
    
    // Optionally clear message after few seconds
    setTimeout(() => {
      setNewsletterMessage('');
    }, 4000);
  };

  return (
    <div>
      <Navbar />

      <section className="promo-section">
        <h1 className="promo-title">The Simplified Art of Productive Living</h1>
        <p className="promo-subtext">
          Make each count with effortless organization, ensuring productivity and purpose every day
        </p>
        <div className="promo-buttons">
          <Link to="/login" className="store-button app-store">
            <i className="fab fa-apple"></i> Log In
          </Link>
          <Link to="/register" className="store-button app-store">
            <i className="fab fa-apple"></i> Create Account
          </Link>
        </div>
      </section>

      <img className="mimage" src={first_mockup} alt="Mockup 1" width="900" />

      <div className="hero-container">
        <div className="hero-image">
          <img src={second_mockup} alt="Mobile Mockup" />
        </div>
        <div className="hero-content">
          <h1>Simplify Your Workflow,<br /> Anytime, Anywhere</h1>
 <Link to="/login" className="store-button app-store">
            <i></i> Learn More
          </Link>        </div>
      </div>

      <div className="hero-container">
        <div className="hero-text">
          <h1>Transform Your Routine for<br />Productivity and Reflection</h1>
          <p>
            Efficiently manage your tasks with our intuitive todo app, ensuring smooth organization
            and enhanced productivity with every click.
          </p>
          <Link to="/login" className="store-button app-store">
            <i></i> Learn More
          </Link>
        </div>
        <div className="hero-image">
          <img src={third_mockup} alt="Todo App UI" />
        </div>
      </div>

      <section className="pricing-section">
        <h2 className="pricing-title">Pricing</h2>
        <div className="billing-toggle">
          <span className="free-label"></span>
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

      {/* ✅ Newsletter Signup */}
      <div className="newsletter-container">
        <h2 className="newsletter-title">Sign up to our newsletter</h2>
        <p className="newsletter-subtitle">
          Receive latest news, updates and many other news every week.
        </p>
        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-button">➤</button>
        </form>
        {newsletterMessage && (
          <p className="newsletter-feedback">{newsletterMessage}</p>
        )}
      </div>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Taskee</h3>
          <p>Simple but cool</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} Technolgia. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default LandingPage;
  