import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="section-title ee-title">
        say<br />
        &nbsp;&nbsp;hello
      </h1>

      <p className="contact-intro ee-text" style={{ marginTop: '2rem' }}>
        write to me about<br />
        &nbsp;&nbsp;runway and backstage coverage<br />
        &nbsp;&nbsp;editorial shoots<br />
        &nbsp;&nbsp;prints and books<br />
        <br />
        find me at{' '}
        <a
          href="https://instagram.com/outsidetheobvious"
          target="_blank"
          rel="noopener noreferrer"
          className="poem-link poem-link-ig"
        >
          @outsidetheobvious
        </a><br />
        &nbsp;&nbsp;or write to{' '}
        <a href="mailto:contact@outsidetheobvious.com" className="poem-link">
          contact@outsidetheobvious.com
        </a><br />
        <br />
        houston, texas<br />
        &nbsp;&nbsp;and on location
      </p>

      <div style={{ marginTop: '4rem' }}>
        <h3 className="section-title ee-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          tell me
        </h3>
        <p className="body-text ee-text" style={{ maxWidth: '500px' }}>
          the brief<br />
          the dates<br />
          the budget<br />
          <br />
          or just<br />
          &nbsp;&nbsp;what you have in mind
        </p>
      </div>
    </section>
  );
};

export default Contact;
