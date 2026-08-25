import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import PoemCanvas from '../components/PoemCanvas';
import RevealSection from '../components/RevealSection';
import wotoFinder from '../utilities/wotoFinder';

const Root = () => {
  const featuredImages = useMemo(() => wotoFinder('fashion', 4), []);
  const poemImages = useMemo(() => wotoFinder('fashion', 6), []);

  const heroPoem = `somewhere between the shutter and the skin
    lives a truth that doesn't know its name
    i wait for accidents
    i photograph the space where you almost were
    the light that forgot to leave`;

  return (
    <>
      <h1 className="sr-only">outside the obvious — fashion & editorial photography by julien clifford</h1>
      {/* hero section with scattered poem */}
      <section className="hero-section" style={{ padding: 0 }}>
        <div className="hero-poem-container">
          <PoemCanvas
            poem={heroPoem}
            images={poemImages}
            scatterIntensity={0.5}
            staggerDelay={120}
            fadeInDuration={1000}
          />
          <div className="hero-cta-overlay">
            <Link to="/contact" className="cta-button">
              let's talk
            </Link>
          </div>
        </div>
      </section>

      {/* currently / next — poetic status */}
      <section className="now-section">
        <Link to="/print-room" className="now-content now-content-link">
          <span className="now-label">soon</span>
          <span className="now-text">new york fashion week &mdash; the city that never stops looking</span>
          <span className="now-cta">visit the print room &rarr;</span>
        </Link>
      </section>

      {/* scrolling marquee — fashion weeks */}
      <div className="marquee-container">
        <div className="marquee">
          <span className="marquee-text">
            nyfw · the space between poses · paris · milan · the almost-kiss · london · backstage whispers · runway · the dress that breathes · editorial · lookbook · campaign · the unplanned miracle ·&nbsp;
          </span>
          <span className="marquee-text">
            nyfw · the space between poses · paris · milan · the almost-kiss · london · backstage whispers · runway · the dress that breathes · editorial · lookbook · campaign · the unplanned miracle ·&nbsp;
          </span>
        </div>
      </div>

      {/* services section - poetic */}
      <RevealSection className="services-section">
        <h2 className="section-title ee-title">
          what i<br />
          &nbsp;&nbsp;&nbsp;do
        </h2>

        <Link to="/gallery/fashion" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">fashion</h3>
            <p className="service-description ee-text">
              the wrinkle that<br />
              wasn't supposed<br />
              to be beautiful
            </p>
          </div>
        </Link>

        <Link to="/gallery/fashion" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">editorial</h3>
            <p className="service-description ee-text">
              stories told<br />
              in f-stops and<br />
              held breath
            </p>
          </div>
        </Link>

        <Link to="/gallery/street" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">portraits</h3>
            <p className="service-description ee-text">
              finding the you<br />
              that you hide<br />
              from mirrors
            </p>
          </div>
        </Link>

        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">direction</h3>
            <p className="service-description ee-text">
              building worlds<br />
              from mood boards<br />
              and maybes
            </p>
          </div>
        </Link>
      </RevealSection>

      {/* quote section */}
      <RevealSection style={{ padding: '6rem 8vw', backgroundColor: 'var(--bg-primary)' }}>
        <blockquote className="quote ee-quote">
          <span style={{ display: 'block', marginLeft: '2rem' }}>"i carry your heart</span>
          <span style={{ display: 'block', marginLeft: '4rem' }}>(i carry it in</span>
          <span style={{ display: 'block', marginLeft: '6rem' }}>my heart)"</span>
          <span style={{ display: 'block', marginTop: '1.5rem', fontSize: '1rem', fontStyle: 'normal', color: 'var(--text-muted)', marginLeft: '3rem' }}>
            — e.e. cummings
          </span>
        </blockquote>
      </RevealSection>

      {/* featured work */}
      <RevealSection style={{ padding: '4rem 4vw 6rem', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ marginBottom: '3rem', paddingLeft: '4vw' }}>
          <h2 className="section-title ee-title">
            things i've<br />
            &nbsp;&nbsp;seen
          </h2>
          <p className="body-text ee-text" style={{ marginTop: '1rem' }}>
            (or maybe<br />
            &nbsp;&nbsp;they saw me)
          </p>
        </div>
        <Gallery imageUrls={featuredImages} genre="fashion" />
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/gallery/fashion" className="cta-button">
            see more
          </Link>
        </div>
      </RevealSection>

      {/* books section */}
      <RevealSection className="books-section">
        <h2 className="section-title ee-title">
          words &<br />
          &nbsp;&nbsp;&nbsp;pictures<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(married)
        </h2>
        <p className="body-text ee-text" style={{ marginBottom: '3rem' }}>
          poems that became photographs<br />
          photographs that became<br />
          &nbsp;&nbsp;something else
        </p>

        <div className="books-grid">
          <div className="book-item">
            <h3 className="book-title">midnight at main</h3>
            <p className="book-description ee-text">
              neon ghosts<br />
              downtown houston<br />
              3am knows all<br />
              &nbsp;&nbsp;the secrets
            </p>
            <span className="book-year">2024</span>
          </div>

          <div className="book-item">
            <h3 className="book-title">a poem of lima</h3>
            <p className="book-description ee-text">
              images that<br />
              rhyme with<br />
              &nbsp;&nbsp;longing
            </p>
            <span className="book-year">2023</span>
          </div>

          <div className="book-item">
            <h3 className="book-title">mis</h3>
            <p className="book-description ee-text">
              dining as<br />
              &nbsp;&nbsp;performance<br />
              hospitality as<br />
              &nbsp;&nbsp;&nbsp;art
            </p>
            <span className="book-year">2022</span>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <Link to="/contact" className="cta-button">
            inquire
          </Link>
        </div>
      </RevealSection>

      {/* experience / credentials — the flex */}
      <RevealSection className="experience-section">
        <div className="experience-item">
          <span className="experience-number">2018</span>
          <span className="experience-label">
            shooting fashion<br />before it was cool<br />(it was always cool)
          </span>
        </div>
        <div className="experience-item">
          <span className="experience-number">90+</span>
          <span className="experience-label">
            runway shows<br />90 chances to blink<br />&nbsp;&nbsp;(i didn't)
          </span>
        </div>
        <div className="experience-item">
          <span className="experience-number">3</span>
          <span className="experience-label">
            published books<br />that people actually<br />&nbsp;&nbsp;bought
          </span>
        </div>
        <div className="experience-item">
          <span className="experience-number">nyfw</span>
          <span className="experience-label">
            new york calls<br />february 2025
          </span>
        </div>
      </RevealSection>

      {/* about section */}
      <RevealSection className="about-section">
        <div>
          <h2 className="section-title ee-title">
            who<br />
            &nbsp;&nbsp;(i think<br />
            &nbsp;&nbsp;&nbsp;&nbsp;i am)
          </h2>
          <p className="about-text ee-text">
            julien clifford<br />
            houston, texas<br />
            <br />
            since 2018<br />
            &nbsp;&nbsp;90+ runway shows<br />
            &nbsp;&nbsp;&nbsp;&nbsp;and still counting<br />
            <br />
            i like the space between<br />
            &nbsp;&nbsp;the pose and the person<br />
            the accident that becomes<br />
            &nbsp;&nbsp;&nbsp;the only true thing<br />
            <br />
            from backstage at nyfw<br />
            to 3am on main street<br />
            &nbsp;&nbsp;i'm just looking<br />
            &nbsp;&nbsp;&nbsp;&nbsp;for what's already there
          </p>
          <p className="about-text" style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            currently: preparing to disappear into new york
          </p>
        </div>
        <div>
          <p className="body-text-large ee-text" style={{ fontStyle: 'italic' }}>
            "photography<br />
            &nbsp;&nbsp;with teeth<br />
            <br />
            less about<br />
            &nbsp;&nbsp;perfection<br />
            <br />
            more about<br />
            &nbsp;&nbsp;presence"
          </p>
        </div>
      </RevealSection>

      {/* cta section */}
      <RevealSection style={{
        padding: '8rem 8vw',
        backgroundColor: 'var(--bg-secondary)',
        textAlign: 'center'
      }}>
        <h2 className="section-title ee-title" style={{ marginBottom: '1.5rem' }}>
          let's make<br />
          &nbsp;&nbsp;something<br />
          &nbsp;&nbsp;&nbsp;&nbsp;that breathes
        </h2>
        <p className="body-text-large ee-text" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
          you have an idea<br />
          i have a camera<br />
          &nbsp;&nbsp;let's see what happens
        </p>
        <Link to="/contact" className="cta-button cta-button-accent">
          reach out
        </Link>
      </RevealSection>
    </>
  );
};

export default Root;
