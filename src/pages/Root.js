import React, { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';
import PoemCanvas from '../components/PoemCanvas';
import RevealSection from '../components/RevealSection';
import wotoFinder from '../utilities/wotoFinder';
import { beforeTheShowImages, nightWatchImages, handsImages } from '../data/homeImages';

// The router owns the URL hash, so the browser never scrolls to #section on
// its own. Do it by hand whenever the hash changes.
const useScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);
};

const Root = () => {
  useScrollToSection();
  const poemImages = useMemo(() => wotoFinder('fashion', 6), []);

  const heroPoem = `somewhere between the shutter and the skin
    lives a truth that doesn't know its name
    i wait for accidents
    i photograph the space where you almost were
    the light that forgot to leave`;

  return (
    <>
      <h1 className="sr-only">outside the obvious — backstage fashion & tall ship photography by julien clifford</h1>
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

      {/* scrolling marquee — the two bodies of work */}
      <div className="marquee-container">
        <div className="marquee">
          <span className="marquee-text">
            nyfw · the space between poses · galveston · the almost-kiss · night watch · backstage whispers · make ready · the dress that breathes · a line in the dark · editorial · the unplanned miracle ·&nbsp;
          </span>
          <span className="marquee-text">
            nyfw · the space between poses · galveston · the almost-kiss · night watch · backstage whispers · make ready · the dress that breathes · a line in the dark · editorial · the unplanned miracle ·&nbsp;
          </span>
        </div>
      </div>

      {/* what i do — poetic, pointing at the two bodies of work */}
      <RevealSection className="services-section">
        <h2 className="section-title ee-title">
          what i<br />
          &nbsp;&nbsp;&nbsp;do
        </h2>

        <Link to="/#before-the-show" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">backstage</h3>
            <p className="service-description ee-text">
              the hour before<br />
              the doors open<br />
              &nbsp;&nbsp;(nobody is watching yet)
            </p>
          </div>
        </Link>

        <Link to="/#night-watch" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">at sea</h3>
            <p className="service-description ee-text">
              i crew these ships<br />
              i do not<br />
              &nbsp;&nbsp;visit them
            </p>
          </div>
        </Link>

        <Link to="/#hands" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">hands</h3>
            <p className="service-description ee-text">
              usually the<br />
              honest part<br />
              &nbsp;&nbsp;of the photograph
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

      {/* before the show — backstage */}
      <RevealSection id="before-the-show" className="home-section home-section--alt">
        <div style={{ marginBottom: '3rem', paddingLeft: '4vw' }}>
          <h2 className="section-title ee-title">
            before<br />
            &nbsp;&nbsp;the show
          </h2>
          <p className="body-text ee-text" style={{ marginTop: '1rem' }}>
            fittings, makeup, last alterations<br />
            models waiting in clothes<br />
            &nbsp;&nbsp;they cannot sit down in<br />
            <br />
            new york and houston<br />
            &nbsp;&nbsp;since 2018<br />
            &nbsp;&nbsp;&nbsp;&nbsp;(or maybe they saw me)
          </p>
        </div>
        <PhotoGallery images={beforeTheShowImages} />
        {/* TODO (missing asset): the 4x5 Grid Show photograph should sit last in this
            gallery. Append it to beforeTheShowImages in src/data/homeImages.js once it
            is in the repo. */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/gallery/fashion" className="cta-button">
            see more
          </Link>
        </div>
      </RevealSection>

      {/* night watch — tall ships */}
      <RevealSection id="night-watch" className="home-section">
        <div style={{ marginBottom: '3rem', paddingLeft: '4vw' }}>
          <h2 className="section-title ee-title">
            night<br />
            &nbsp;&nbsp;watch
          </h2>
          <p className="body-text ee-text" style={{ marginTop: '1rem' }}>
            make ready<br />
            day sails out of galveston<br />
            &nbsp;&nbsp;one long sail to new york<br />
            <br />
            some of it shot on film<br />
            developed by hand<br />
            &nbsp;&nbsp;weeks after it happened<br />
            &nbsp;&nbsp;&nbsp;&nbsp;(the sea doesn't mind waiting)
          </p>
        </div>
        {/* TODO (missing assets): no tallship photographs are in the repo yet. These
            slots render as marked placeholders until public/gallery/tallships/1.jpg
            to 6.jpg exist. See src/data/homeImages.js. */}
        <PhotoGallery images={nightWatchImages} />
      </RevealSection>

      {/* hands — the series that runs through both */}
      <RevealSection id="hands" className="home-section home-section--alt">
        <div style={{ marginBottom: '3rem', paddingLeft: '4vw' }}>
          <h2 className="section-title ee-title">
            hands
          </h2>
          <p className="body-text ee-text" style={{ marginTop: '1rem' }}>
            hands pinning a hem<br />
            hands on a line in the dark<br />
            <br />
            the work is mostly done by hands<br />
            &nbsp;&nbsp;and the hands<br />
            &nbsp;&nbsp;&nbsp;&nbsp;rarely lie
          </p>
        </div>
        <PhotoGallery images={handsImages} />
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
          <Link to="/print-room" className="cta-button">
            prints, too
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
          <span className="experience-number">1877</span>
          <span className="experience-label">
            the barque elissa<br />galveston<br />&nbsp;&nbsp;(crew, not passenger)
          </span>
        </div>
      </RevealSection>

      {/* about section */}
      <RevealSection id="about" className="about-section">
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
            i run atelier actara<br />
            &nbsp;&nbsp;which produces the shows<br />
            so the backstage photographs<br />
            &nbsp;&nbsp;&nbsp;are taken from inside the work<br />
            <br />
            at sea i am crew<br />
            &nbsp;&nbsp;not a passenger<br />
            <br />
            both are the same subject, in the end<br />
            &nbsp;&nbsp;people getting something ready<br />
            &nbsp;&nbsp;&nbsp;&nbsp;that the audience<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;will only see finished
          </p>
          <p className="about-text" style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            currently: somewhere between a runway and a night watch
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
      <RevealSection id="contact" style={{
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
