import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
    <section className="contact-section">
      <h1 className="section-title">book a shoot</h1>
      <p className="body-text-large" style={{ marginBottom: '2rem', maxWidth: '500px' }}>
        ready to create something beautiful?
        let's talk about your vision.
      </p>
      <Link to="/contact" className="cta-button">
        get in touch
      </Link>
    </section>
  );
};

export default Booking;
