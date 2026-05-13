import React from 'react';
import { Server, Droplets, Leaf, Shield, HardDrive, Zap, ExternalLink } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Header with Logo */}
      <header className="header" data-testid="header">
        <div className="header-content">
          <a 
            href="http://www.gravrel.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="logo-link"
            data-testid="logo-link"
          >
            <img src="/logo.png" alt="GravRel Logo" className="logo" data-testid="logo-image" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-label" data-testid="hero-label">GRAVITY + RELATIVITY</div>
          <h1 className="hero-title" data-testid="hero-title">
            Eco-Friendly Infrastructure
            <br />
            <span className="hero-gradient">For Tomorrow</span>
          </h1>
          <p className="hero-description" data-testid="hero-description">
            Providing eco-friendly data solutions for small businesses and students,
            <br />
            saving water and energy every step of the way.
          </p>
          <div className="hero-stats" data-testid="hero-stats">
            <div className="stat-item">
              <Droplets className="stat-icon" />
              <div>
                <div className="stat-value">85%</div>
                <div className="stat-label">Water Saved</div>
              </div>
            </div>
            <div className="stat-item">
              <Leaf className="stat-icon" />
              <div>
                <div className="stat-value">90%</div>
                <div className="stat-label">Energy Efficient</div>
              </div>
            </div>
            <div className="stat-item">
              <Zap className="stat-icon" />
              <div>
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section" data-testid="mission-section">
        <div className="section-container">
          <div className="mission-card">
            <h2 className="section-title" data-testid="mission-title">Our Mission</h2>
            <p className="mission-text" data-testid="mission-text">
              We're a technology startup focused on building reliable and scalable infrastructure solutions. 
              We provide secure hosting, storage, and compute services designed for performance and reliability. 
              Our mission is to deliver modern infrastructure solutions for businesses and developers while 
              protecting our planet's precious resources.
            </p>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="features-section" data-testid="features-section">
        <div className="section-container">
          <h2 className="section-title text-center" data-testid="features-title">
            Sustainable Technology Solutions
          </h2>
          <div className="bento-grid">
            <div className="feature-card" data-testid="feature-water">
              <div className="feature-icon-wrapper">
                <Droplets className="feature-icon" />
              </div>
              <h3 className="feature-title">Water Conservation</h3>
              <p className="feature-description">
                Advanced cooling systems that reduce water consumption by 85% compared to traditional datacenters.
              </p>
            </div>
            
            <div className="feature-card" data-testid="feature-energy">
              <div className="feature-icon-wrapper">
                <Leaf className="feature-icon" />
              </div>
              <h3 className="feature-title">Renewable Energy</h3>
              <p className="feature-description">
                Powered by 90% renewable energy sources, minimizing carbon footprint at every step.
              </p>
            </div>
            
            <div className="feature-card" data-testid="feature-hosting">
              <div className="feature-icon-wrapper">
                <Server className="feature-icon" />
              </div>
              <h3 className="feature-title">Secure Hosting</h3>
              <p className="feature-description">
                Enterprise-grade security with 24/7 monitoring and DDoS protection for your peace of mind.
              </p>
            </div>
            
            <div className="feature-card" data-testid="feature-storage">
              <div className="feature-icon-wrapper">
                <HardDrive className="feature-icon" />
              </div>
              <h3 className="feature-title">Scalable Storage</h3>
              <p className="feature-description">
                Flexible storage solutions that grow with your business, from startups to enterprises.
              </p>
            </div>
            
            <div className="feature-card" data-testid="feature-compute">
              <div className="feature-icon-wrapper">
                <Zap className="feature-icon" />
              </div>
              <h3 className="feature-title">High Performance</h3>
              <p className="feature-description">
                Lightning-fast compute services optimized for maximum efficiency and minimal latency.
              </p>
            </div>
            
            <div className="feature-card" data-testid="feature-security">
              <div className="feature-icon-wrapper">
                <Shield className="feature-icon" />
              </div>
              <h3 className="feature-title">Data Protection</h3>
              <p className="feature-description">
                Military-grade encryption and compliance with international data protection standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="ceo-section" data-testid="ceo-section">
        <div className="section-container">
          <div className="ceo-card">
            <div className="ceo-label">LEADERSHIP</div>
            <div className="ceo-content">
              <div className="ceo-image-wrapper">
                {/* EDIT THIS: Replace the src with your CEO photo path */}
                <img 
                  src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMGJ1c2luZXNzfGVufDB8fHx8MTc3NTU3NTQ1NHww&ixlib=rb-4.1.0&q=85" 
                  alt="CEO Photo" 
                  className="ceo-image"
                  data-testid="ceo-image"
                />
              </div>
              <div className="ceo-info">
                {/* EDIT THIS: Change the name below */}
                <h3 className="ceo-name" data-testid="ceo-name">Babrit Behera</h3>
                <p className="ceo-title" data-testid="ceo-title">Chief Executive Officer</p>
                <p className="ceo-bio" data-testid="ceo-bio">
                  Leading GravRel's mission to revolutionize datacenter infrastructure with 
                  sustainable technology solutions. Committed to building a greener future for 
                  cloud computing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CFO Profile Section */}
      <section className="ceo-section" data-testid="cfo-section">
        <div className="section-container">
          <div className="ceo-card">
            <div className="ceo-label">LEADERSHIP</div>
            <div className="ceo-content">
              <div className="ceo-image-wrapper">
                {/* EDIT THIS: Replace the src with your CFO photo path */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800" 
                  alt="CFO Photo" 
                  className="ceo-image"
                  data-testid="cfo-image"
                />
              </div>
              <div className="ceo-info">
                {/* EDIT THIS: Change the name below */}
                <h3 className="ceo-name" data-testid="cfo-name">Shankar Lal</h3>
                <p className="ceo-title" data-testid="cfo-title">Chief Financial Officer</p>
                <p className="ceo-bio" data-testid="cfo-bio">
                  Driving GravRel's financial strategy and sustainable growth. Overseeing 
                  capital planning, investor relations, and fiscal discipline to power our 
                  green infrastructure mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Certificate Section */}
      <section className="certificate-section" data-testid="certificate-section">
        <div className="section-container">
          <div className="certificate-card">
            <div className="certificate-label">OFFICIALLY REGISTERED</div>
            <h2 className="section-title" data-testid="certificate-title">Registration Certificate</h2>
            
            <div className="certificate-content">
              <div className="certificate-image-wrapper">
                {/* EDIT THIS: Replace the src with your certificate image path */}
                <img 
                  src="https://images.unsplash.com/photo-1629470937782-255f06f55fa2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxmcmFtZWQlMjBjZXJ0aWZpY2F0ZXxlbnwwfHx8fDE3NzU1NzU0NzN8MA&ixlib=rb-4.1.0&q=85" 
                  alt="Registration Certificate" 
                  className="certificate-image"
                  data-testid="certificate-image"
                />
              </div>
              
              <div className="certificate-details" data-testid="certificate-details">
                <h3 className="certificate-details-title">Registration Details</h3>
                <div className="certificate-info-grid">
                  {/* EDIT THESE: Replace with your actual registration details */}
                  <div className="certificate-info-item">
                    <div className="certificate-info-label">Certificate Number</div>
                    <div className="certificate-info-value" data-testid="certificate-number">XXXX-XXXX-XXXX</div>
                  </div>
                  <div className="certificate-info-item">
                    <div className="certificate-info-label">Registration Date</div>
                    <div className="certificate-info-value" data-testid="certificate-date">DD/MM/YYYY</div>
                  </div>
                  <div className="certificate-info-item">
                    <div className="certificate-info-label">Issued By</div>
                    <div className="certificate-info-value" data-testid="certificate-issuer">Registration Authority</div>
                  </div>
                  <div className="certificate-info-item">
                    <div className="certificate-info-label">Company Type</div>
                    <div className="certificate-info-value" data-testid="certificate-type">Private Limited</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section / Footer */}
      <footer className="footer-section" data-testid="footer-section">
        <div className="section-container">
          <div className="footer-content">
            <h2 className="footer-title" data-testid="footer-title">
              Let's Build the Future Together
            </h2>
            <p className="footer-subtitle" data-testid="footer-subtitle">
              Get in touch to learn more about our eco-friendly infrastructure solutions
            </p>
            
            <div className="contact-grid" data-testid="contact-grid">
              <div className="contact-item">
                <div className="contact-label">Email</div>
                {/* EDIT THIS: Update email if needed */}
                <a href="mailto:support@gravrel.com" className="contact-value" data-testid="contact-email">
                  support@gravrel.com
                </a>
              </div>
              
              <div className="contact-item">
                <div className="contact-label">Phone</div>
                {/* EDIT THIS: Add your phone number */}
                <div className="contact-value" data-testid="contact-phone">XXXXXXXXXX</div>
              </div>
              
              <div className="contact-item">
                <div className="contact-label">Address</div>
                {/* EDIT THIS: Add your address */}
                <div className="contact-value" data-testid="contact-address">_____________</div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-logo-wrapper">
              <img src="/logo.png" alt="GravRel" className="footer-logo" data-testid="footer-logo" />
            </div>
            <p className="footer-tagline" data-testid="footer-tagline">gravity + relativity</p>
            <p className="footer-copyright" data-testid="footer-copyright">
              © 2026 GravRel. All rights reserved. Building sustainable infrastructure for a better tomorrow.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
