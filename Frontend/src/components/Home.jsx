import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">GOLDEN INDUSTRIAL</div>
        <ul className="nav-links">
          <li>
            <a href="#home" className="active">
              HOME
            </a>
          </li>
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#board">BOARD MEMBERS</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#process">OUR PROCESS</a>
          </li>
          <li>
            <a href="#training">TRAINING</a>
          </li>
          <li>
            <a href="#contact">CONTACT US</a>
          </li>

          <li>
            <a href="/directory" target="_blank" rel="noopener noreferrer">
              DIRECTORY
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-content">
        <div className="company-name">
          <h1>GOLDEN INDUSTRIAL DATA ANALYSIS</h1>
          <h2>PRIVATE LIMITED</h2>
        </div>

        <div className="tagline">
          <h3>PRECISE ANALYSIS GUARANTEED</h3>
        </div>

        <div className="description">
          <p>
            We are a data-driven company specializing in turning complex data
            into clear, actionable insights.
          </p>
          <p>
            Our mission is to help businesses make informed decisions, optimize
            performance, and stay ahead in a competitive landscape.
          </p>
        </div>

        <div className="cta-buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Learn More</button>
        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Home;
