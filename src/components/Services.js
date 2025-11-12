import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>IT Solutions</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service-card">
          <h3>Cyber Security</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service-card">
          <h3>Networking</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
