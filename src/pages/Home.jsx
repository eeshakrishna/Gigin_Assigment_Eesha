// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the main CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Pet Listing</h1>
      <nav className="home-nav">
        <ul className="home-nav-list">
          <li className="home-nav-item">
            <Link to="/pets" className="home-nav-link">
              <button className="home-nav-button">List of Pets</button>
            </Link>
          </li>
          <li className="home-nav-item">
            <Link to="/pet-details" className="home-nav-link">
              <button className="home-nav-button">Pet Details by ID</button>
            </Link>
          </li>
          <li className="home-nav-item">
            <Link to="/breeds" className="home-nav-link">
              <button className="home-nav-button">Breeds by Animal Type</button>
            </Link>
          </li>
          <li className="home-nav-item">
            <Link to="/search" className="home-nav-link">
              <button className="home-nav-button">Search Pets</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
