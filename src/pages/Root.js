import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import wotoFinder from '../utilities/wotoFinder';

const Root = () => {
  const featuredImages = [...wotoFinder('fashion', 4)];

  return (
    <>
      {/* hero section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-subtitle">fashion & editorial photography</p>
          <h1 className="hero-title">
            i shoot in the cracks<br />
            between polish<br />
            & instinct
          </h1>
          <p className="hero-tagline">
            the undone button. the smudged lipstick. the last drag before the spotlight hits.
            everything too good to plan.
          </p>
          <Link to="/contact" className="cta-button">
            book a shoot
          </Link>
        </div>
      </section>

      {/* currently / next — poetic status */}
      <section className="now-section">
        <div className="now-content">
          <span className="now-label">next</span>
          <span className="now-text">new york fashion week — february 2025</span>
        </div>
      </section>

      {/* scrolling marquee — fashion weeks */}
      <div className="marquee-container">
        <div className="marquee">
          <span className="marquee-text">
            nyfw · paris fashion week · milan · london · backstage · runway · editorial · lookbook · campaign · nyfw · paris fashion week · milan · london · backstage · runway · editorial · lookbook · campaign ·&nbsp;
          </span>
          <span className="marquee-text">
            nyfw · paris fashion week · milan · london · backstage · runway · editorial · lookbook · campaign · nyfw · paris fashion week · milan · london · backstage · runway · editorial · lookbook · campaign ·&nbsp;
          </span>
        </div>
      </div>

      {/* services section */}
      <section className="services-section">
        <h2 className="section-title">services</h2>

        <Link to="/gallery/fashion" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">fashion photography</h3>
            <p className="service-description">
              editorial spreads, lookbooks, campaign work.
              raw energy meets refined vision.
            </p>
          </div>
        </Link>

        <Link to="/gallery/fashion" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">editorial shoots</h3>
            <p className="service-description">
              magazine features, brand stories, creative direction.
              every frame tells a story.
            </p>
          </div>
        </Link>

        <Link to="/gallery/street" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">portrait sessions</h3>
            <p className="service-description">
              headshots, artist portraits, personal branding.
              capturing who you really are.
            </p>
          </div>
        </Link>

        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">creative consultation</h3>
            <p className="service-description">
              art direction, mood boards, visual strategy.
              let's build something together.
            </p>
          </div>
        </Link>
      </section>

      {/* quote section */}
      <section style={{ padding: '6rem 8vw', backgroundColor: '#0a0a0a' }}>
        <blockquote className="quote">
          "the eyes of my eyes are opened"
          <span style={{ display: 'block', marginTop: '1rem', fontSize: '1rem', fontStyle: 'normal', color: '#6b6560' }}>
            — e.e. cummings
          </span>
        </blockquote>
      </section>

      {/* featured work */}
      <section style={{ padding: '4rem 4vw 6rem', backgroundColor: '#111111' }}>
        <div style={{ marginBottom: '3rem', paddingLeft: '4vw' }}>
          <h2 className="section-title">selected work</h2>
          <p className="body-text">a glimpse into the chaos & the beauty</p>
        </div>
        <Gallery imageUrls={featuredImages} />
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/gallery/fashion" className="cta-button">
            view full portfolio
          </Link>
        </div>
      </section>

      {/* books section */}
      <section className="books-section">
        <h2 className="section-title">published works</h2>
        <p className="body-text" style={{ marginBottom: '3rem' }}>
          photographs that became poetry. poetry that became books.
        </p>

        <div className="books-grid">
          <div className="book-item">
            <h3 className="book-title">midnight at main</h3>
            <p className="book-description">
              downtown houston, after hours.
              neon and shadow. strangers and ghosts.
            </p>
            <span className="book-year">2024</span>
          </div>

          <div className="book-item">
            <h3 className="book-title">a poem of lima</h3>
            <p className="book-description">
              images that rhyme.
              peru through a lens of longing.
            </p>
            <span className="book-year">2023</span>
          </div>

          <div className="book-item">
            <h3 className="book-title">mis</h3>
            <p className="book-description">
              a visual journey through abstract dining.
              hospitality as art form.
            </p>
            <span className="book-year">2022</span>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <Link to="/contact" className="cta-button">
            inquire about prints & books
          </Link>
        </div>
      </section>

      {/* experience / credentials — subtle flex */}
      <section className="experience-section">
        <div className="experience-item">
          <span className="experience-number">5+</span>
          <span className="experience-label">years shooting fashion</span>
        </div>
        <div className="experience-item">
          <span className="experience-number">3</span>
          <span className="experience-label">published books</span>
        </div>
        <div className="experience-item">
          <span className="experience-number">nyfw</span>
          <span className="experience-label">fashion week 2025</span>
        </div>
      </section>

      {/* about section */}
      <section className="about-section">
        <div>
          <h2 className="section-title">about</h2>
          <p className="about-text">
            i'm julien clifford, a fashion and editorial photographer based in houston.
            i like it messy — the tension before the shot, the accident that becomes art,
            the moment between takes when everything feels electric.
          </p>
          <p className="about-text" style={{ marginTop: '1.5rem' }}>
            from backstage at new york fashion week to midnight shoots in downtown houston,
            i'm chasing energy, tension, and everything that lives outside the obvious.
          </p>
          <p className="about-text" style={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#6b6560' }}>
            currently: preparing for nyfw february 2025.
          </p>
        </div>
        <div>
          <p className="body-text-large" style={{ fontStyle: 'italic' }}>
            "photography with teeth.
            less about perfection,
            more about presence."
          </p>
        </div>
      </section>

      {/* cta section */}
      <section style={{
        padding: '8rem 8vw',
        backgroundColor: '#111111',
        textAlign: 'center'
      }}>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
          let's create something
        </h2>
        <p className="body-text-large" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
          ready to make images that feel alive?
          i'd love to hear about your project.
        </p>
        <Link to="/contact" className="cta-button cta-button-accent">
          get in touch
        </Link>
      </section>
    </>
  );
};

export default Root;
