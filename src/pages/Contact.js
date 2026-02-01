import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <p className="contact-intro">
        let's make something beautiful together.
        whether you have a clear vision or just a spark of an idea,
        i'd love to hear from you.
      </p>

      <div>
        <a href="mailto:contact@outsidetheobvious.com" className="contact-email">
          contact@outsidetheobvious.com
        </a>
      </div>

      <div className="social-links">
        <a
          href="https://instagram.com/outsidetheobvious"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          instagram
        </a>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <p className="body-text" style={{ maxWidth: '400px' }}>
          based in houston, texas.
          available for travel worldwide.
        </p>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          what to include
        </h3>
        <p className="body-text" style={{ maxWidth: '500px', lineHeight: '2' }}>
          tell me about your project — the vibe you're going for,
          any references or mood boards you have,
          your timeline, and your budget range.
          the more context, the better.
        </p>
      </div>
    </section>
  );
};

export default Contact;
