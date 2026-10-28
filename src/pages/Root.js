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
  const poemImages = useMemo(() => wotoFinder('fashion', 4), []);

  const heroPoem = `i photograph fashion shows
    from backstage
    and tall ships
    from the deck
    houston, new york, galveston
    since 2018`;

  return (
    <>
      <h1 className="sr-only">outside the obvious: julien clifford photographs fashion shows from backstage and life aboard tall ships</h1>
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

      {/* currently / next / poetic status */}
      <section className="now-section">
        <Link to="/print-room" className="now-content now-content-link">
          <span className="now-label">prints</span>
          <span className="now-text">prints and downloads from the shows i have photographed</span>
          <span className="now-cta">visit the print room &rarr;</span>
        </Link>
      </section>

      {/* scrolling marquee / the two bodies of work */}
      <div className="marquee-container">
        <div className="marquee">
          <span className="marquee-text">
            new york fashion week · houston · backstage · runway · editorial · galveston · elissa · night watch · film · prints ·&nbsp;
          </span>
          <span className="marquee-text">
            new york fashion week · houston · backstage · runway · editorial · galveston · elissa · night watch · film · prints ·&nbsp;
          </span>
        </div>
      </div>

      {/* what i do / poetic, pointing at the two bodies of work */}
      <RevealSection className="services-section">
        <h2 className="section-title ee-title">
          what i<br />
          &nbsp;&nbsp;&nbsp;do
        </h2>

        <Link to="/#before-the-show" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">backstage</h3>
            <p className="service-description ee-text">
              i shoot the hour<br />
              before the doors open<br />
              &nbsp;&nbsp;fittings, makeup, the lineup
            </p>
          </div>
        </Link>

        <Link to="/#night-watch" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">at sea</h3>
            <p className="service-description ee-text">
              i crew elissa<br />
              out of galveston<br />
              &nbsp;&nbsp;and photograph the watches
            </p>
          </div>
        </Link>

        <Link to="/#hands" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">hands</h3>
            <p className="service-description ee-text">
              a small series<br />
              of hands at work<br />
              &nbsp;&nbsp;backstage and on deck
            </p>
          </div>
        </Link>

        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <div className="service-item">
            <h3 className="service-title">editorial</h3>
            <p className="service-description ee-text">
              shoots on commission<br />
              for brands and magazines<br />
              &nbsp;&nbsp;in houston and on location
            </p>
          </div>
        </Link>
      </RevealSection>

      {/* before the show / backstage */}
      <RevealSection id="before-the-show" className="home-section home-section--alt">
        <div style={{ marginBottom: '3rem', paddingLeft: '4vw' }}>
          <h2 className="section-title ee-title">
            before<br />
            &nbsp;&nbsp;the show
          </h2>
          <p className="body-text ee-text" style={{ marginTop: '1rem' }}>
            someone pins a hem<br />
            someone finishes an eye<br />
            the lineup forms<br />
            &nbsp;&nbsp;at the curtain<br />
            <br />
            i have shot this hour<br />
            &nbsp;&nbsp;in new york and houston<br />
            &nbsp;&nbsp;&nbsp;&nbsp;since 2018
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

      {/* night watch / tall ships */}
      <RevealSection id="night-watch" className="home-section">
        <div style={{ marginBottom: '3rem', paddingLeft: '4vw' }}>
          <h2 className="section-title ee-title">
            night<br />
            &nbsp;&nbsp;watch
          </h2>
          <p className="body-text ee-text" style={{ marginTop: '1rem' }}>
            we make ready<br />
            we sail out of galveston for the day<br />
            &nbsp;&nbsp;once we sailed all the way to new york<br />
            <br />
            i shoot some of it on film<br />
            &nbsp;&nbsp;and develop it myself
          </p>
        </div>
        {/* TODO (missing assets): no tallship photographs are in the repo yet. These
            slots render as marked placeholders until public/gallery/tallships/1.jpg
            to 6.jpg exist. See src/data/homeImages.js. */}
        <PhotoGallery images={nightWatchImages} />
      </RevealSection>

      {/* hands / the series that runs through both */}
      <RevealSection id="hands" className="home-section home-section--alt">
        <div style={{ marginBottom: '3rem', paddingLeft: '4vw' }}>
          <h2 className="section-title ee-title">
            hands
          </h2>
          <p className="body-text ee-text" style={{ marginTop: '1rem' }}>
            close frames of hands at work<br />
            &nbsp;&nbsp;backstage and on deck<br />
            <br />
            drawn from both sets<br />
            &nbsp;&nbsp;and still growing
          </p>
        </div>
        <PhotoGallery images={handsImages} />
      </RevealSection>

      {/* books section */}
      <RevealSection className="books-section">
        <h2 className="section-title ee-title">
          books
        </h2>
        <p className="body-text ee-text" style={{ marginBottom: '3rem' }}>
          three books of photographs and poems<br />
          &nbsp;&nbsp;printed and sold<br />
          &nbsp;&nbsp;&nbsp;&nbsp;2022 to 2024
        </p>

        <div className="books-grid">
          <div className="book-item">
            <h3 className="book-title">midnight at main</h3>
            <p className="book-description ee-text">
              main street<br />
              downtown houston<br />
              after midnight<br />
              &nbsp;&nbsp;photographs and one poem
            </p>
            <span className="book-year">2024</span>
          </div>

          <div className="book-item">
            <h3 className="book-title">a poem of lima</h3>
            <p className="book-description ee-text">
              lima<br />
              in photographs<br />
              &nbsp;&nbsp;and one poem
            </p>
            <span className="book-year">2023</span>
          </div>

          <div className="book-item">
            <h3 className="book-title">mis</h3>
            <p className="book-description ee-text">
              a book about dining<br />
              &nbsp;&nbsp;the room, the table,<br />
              &nbsp;&nbsp;&nbsp;the people who serve it
            </p>
            <span className="book-year">2022</span>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <Link to="/print-room" className="cta-button">
            see the prints
          </Link>
        </div>
      </RevealSection>

      {/* about section */}
      <RevealSection id="about" className="about-section">
        <div>
          <h2 className="section-title ee-title">
            who
          </h2>
          <p className="about-text ee-text">
            julien clifford<br />
            houston, texas<br />
            <br />
            since 2018<br />
            &nbsp;&nbsp;more than ninety runway shows<br />
            &nbsp;&nbsp;&nbsp;&nbsp;in houston and new york<br />
            <br />
            i run atelier actara<br />
            &nbsp;&nbsp;which produces fashion shows<br />
            so i shoot backstage<br />
            &nbsp;&nbsp;&nbsp;from inside the work<br />
            <br />
            at sea i stand watches<br />
            &nbsp;&nbsp;and haul lines<br />
            &nbsp;&nbsp;&nbsp;&nbsp;aboard elissa, built 1877
          </p>
          <p className="about-text" style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            currently: shooting in houston and sailing out of galveston
          </p>
        </div>
        <div>
          <p className="body-text-large ee-text">
            <a href="mailto:contact@outsidetheobvious.com" className="poem-link">contact@outsidetheobvious.com</a><br />
            &nbsp;&nbsp;<a href="https://instagram.com/outsidetheobvious" target="_blank" rel="noopener noreferrer" className="poem-link poem-link-ig">@outsidetheobvious</a><br />
            <br />
            leica m3, leica x2<br />
            &nbsp;&nbsp;ricoh gr iii<br />
            &nbsp;&nbsp;&nbsp;&nbsp;olympus om-d e-m1x
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
          book<br />
          &nbsp;&nbsp;a shoot
        </h2>
        <p className="body-text-large ee-text" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
          runway, backstage, editorial<br />
          &nbsp;&nbsp;and prints of all of it<br />
          <br />
          send the dates and the brief
        </p>
        <Link to="/contact" className="cta-button cta-button-accent">
          reach out
        </Link>
      </RevealSection>
    </>
  );
};

export default Root;
