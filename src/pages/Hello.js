import React from 'react';
import { Link } from 'react-router-dom';
import PoemCanvas from '../components/PoemCanvas';

const Hello = () => {
  const greetingPoem = `so
    we meet
      in the flesh
        (or close enough)

    you found me
      somewhere real
        not just scrolling
          but standing
            touching
              curious`;

  return (
    <div className="hello-page">
      {/* hero greeting */}
      <section className="hello-hero">
        <PoemCanvas
          poem={greetingPoem}
          scatterIntensity={0.4}
          staggerDelay={100}
          fadeInDuration={800}
        />
      </section>

      {/* intro */}
      <section className="hello-intro">
        <p className="hello-text ee-text">
          i'm julien<br />
          &nbsp;&nbsp;i make pictures<br />
          &nbsp;&nbsp;&nbsp;&nbsp;that feel like something
        </p>
      </section>

      {/* what i do - quick overview */}
      <section className="hello-grid">
        <Link to="/gallery/fashion" className="hello-card">
          <span className="hello-card-title">fashion</span>
          <span className="hello-card-sub">
            90+ runway shows<br />
            since 2018
          </span>
        </Link>

        <Link to="/gallery/street" className="hello-card">
          <span className="hello-card-title">streets</span>
          <span className="hello-card-sub">
            the city<br />
            unposed
          </span>
        </Link>

        <Link to="/gallery/travel" className="hello-card">
          <span className="hello-card-title">travel</span>
          <span className="hello-card-sub">
            places that<br />
            changed me
          </span>
        </Link>

        <Link to="/" className="hello-card">
          <span className="hello-card-title">books</span>
          <span className="hello-card-sub">
            3 published<br />
            (people bought them)
          </span>
        </Link>
      </section>

      {/* currently */}
      <section className="hello-now">
        <span className="hello-now-label">currently</span>
        <span className="hello-now-text">
          preparing for nyfw &mdash; february 2025
        </span>
      </section>

      {/* cta */}
      <section className="hello-cta">
        <p className="hello-text ee-text" style={{ marginBottom: '2rem' }}>
          let's make<br />
          &nbsp;&nbsp;something<br />
          &nbsp;&nbsp;&nbsp;&nbsp;together
        </p>
        <div className="hello-buttons">
          <Link to="/contact" className="cta-button">
            work with me
          </Link>
          <a
            href="https://instagram.com/outsidetheobvious"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-outline"
          >
            @outsidetheobvious
          </a>
        </div>
      </section>

      {/* footer note */}
      <section className="hello-footer">
        <p className="hello-small">
          thanks for scanning<br />
          &nbsp;&nbsp;most people just walk by
        </p>
      </section>
    </div>
  );
};

export default Hello;
