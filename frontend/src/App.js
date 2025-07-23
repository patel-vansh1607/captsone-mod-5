import Navbar from './components/Navbar';
import './App.css'
function App() {
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
    </div>
  );
}

export default App;
