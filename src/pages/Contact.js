import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="section-title ee-title">
        say<br />
        &nbsp;&nbsp;hello<br />
        &nbsp;&nbsp;&nbsp;&nbsp;(or something<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stranger)
      </h1>

      <p className="contact-intro ee-text" style={{ marginTop: '2rem' }}>
        you have something<br />
        &nbsp;&nbsp;you want to show the world<br />
        <br />
        i have a way<br />
        &nbsp;&nbsp;of seeing<br />
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
        &nbsp;&nbsp;(but i travel<br />
        &nbsp;&nbsp;&nbsp;wherever the light takes me)<br />
        <br />
        let's find out what happens<br />
        &nbsp;&nbsp;when we collide
      </p>

      <div style={{ marginTop: '4rem' }}>
        <h3 className="section-title ee-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          tell me<br />
          &nbsp;&nbsp;everything<br />
          &nbsp;&nbsp;&nbsp;&nbsp;(or nothing)
        </h3>
        <p className="body-text ee-text" style={{ maxWidth: '500px' }}>
          the vibe<br />
          the vision<br />
          the deadline<br />
          the budget<br />
          <br />
          or just<br />
          &nbsp;&nbsp;a feeling<br />
          &nbsp;&nbsp;&nbsp;you can't name yet
        </p>
      </div>
    </section>
  );
};

export default Contact;
