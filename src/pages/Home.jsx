import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for additional styling

const Home = () => (
  <div className="home-container">
    <header className="home-header">
      <h1>Welcome to GEWO</h1>
      <p>Your personal gym workout tracker</p>
    </header>
    
    <section className="features">
      <h2>Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Track Workouts</h3>
          <p>Log your workouts and monitor your progress over time.</p>
        </div>
        <div className="feature-item">
          <h3>Personalized Plans</h3>
          <p>Get customized workout plans based on your fitness goals.</p>
        </div>
        <div className="feature-item">
          <h3>Nutrition Tracking</h3>
          <p>Keep track of your meals and nutritional intake.</p>
        </div>
        <div className="feature-item">
          <h3>Progress Analytics</h3>
          <p>View detailed statistics and charts of your progress.</p>
        </div>
      </div>
    </section>

    <section className="cta">
      <h2>Get Started</h2>
      <div className="cta-buttons">
        <Link to="/record">
          <button className="cta-button">Start a New Workout</button>
        </Link>
        <Link to="/summary">
          <button className="cta-button">View Summary</button>
        </Link>
      </div>
    </section>

    <footer className="home-footer">
      <p>© 2024 GEWO. All rights reserved.</p>
    </footer>
  </div>
);

export default Home;
