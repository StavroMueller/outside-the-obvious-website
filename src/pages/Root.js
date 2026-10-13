import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';
import RevealSection from '../components/RevealSection';
import Verse from '../components/Verse';
import {
  heroImages,
  beforeTheShowImages,
  nightWatchImages,
  handsImages,
} from '../data/homeImages';

// TODO: set the public contact address here, in one place. While it is still the
// placeholder the page shows it as plain text rather than a mailto link.
const PUBLIC_EMAIL = 'TODO_PUBLIC_EMAIL';
const INSTAGRAM_URL = 'https://www.instagram.com/outsidetheobvious';

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

const emailIsSet = !PUBLIC_EMAIL.startsWith('TODO');

const ContactEmail = () =>
  emailIsSet ? <a href={`mailto:${PUBLIC_EMAIL}`}>{PUBLIC_EMAIL}</a> : PUBLIC_EMAIL;

// The closing button goes to email once an address is set. Until then it
// goes to Instagram, which is the only working channel on the page.
const ContactButton = () =>
  emailIsSet ? (
    <a href={`mailto:${PUBLIC_EMAIL}`} className="cta-button">
      email julien
    </a>
  ) : (
    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
      message on instagram
    </a>
  );

const Root = () => {
  useScrollToSection();

  return (
    <>
      {/* Name, one line on the work, and a way to book, all before the first scroll.
          The photographs follow straight after. */}
      <section id="intro" className="home-section home-intro">
        <div className="home-section-header home-intro-copy">
          <div className="home-section-title">
            <h1 className="home-name">julien clifford</h1>
            <p className="home-role">photographer. houston, texas.</p>
          </div>
          <div className="home-section-body">
            <Verse>{`
              i photograph fashion shows
                from backstage,
                  and life aboard tall ships.
              most of it happens
                before anyone is watching.
            `}</Verse>
            <Verse className="home-facts">{`
              90+ runway shows photographed
                (and still counting)
              crew aboard the 1877 barque elissa, galveston.
            `}</Verse>
            <Link to="/#contact" className="cta-button">
              commission a shoot
            </Link>
          </div>
        </div>
        <PhotoGallery images={heroImages} />
      </section>

      <RevealSection id="before-the-show" className="home-section">
        <div className="home-section-header">
          <div className="home-section-title">
            <h2 className="home-heading">before the show</h2>
          </div>
          <div className="home-section-body">
            <Verse>{`
              the hour before the doors open.
                fittings, makeup, last alterations,
                  models waiting in clothes
                    they cannot sit down in.
              shot at new york fashion week
                and in houston, since 2018.
            `}</Verse>
          </div>
        </div>
        <PhotoGallery images={beforeTheShowImages} />
        {/* TODO (missing asset): the 4x5 Grid Show photograph should sit last in this
            gallery. It is not in the repo. Append it to beforeTheShowImages in
            src/data/homeImages.js once it is. */}
      </RevealSection>

      <RevealSection id="night-watch" className="home-section home-section--alt">
        <div className="home-section-header">
          <div className="home-section-title">
            <h2 className="home-heading">night watch</h2>
          </div>
          <div className="home-section-body">
            <Verse>{`
              i crew these ships;
                i do not visit them.
              night watches, make ready,
                day sails out of galveston,
                  and one long sail to new york.
              some of it is shot on film
                and developed by hand,
                  weeks after it happened.
            `}</Verse>
          </div>
        </div>
        {/* TODO (missing assets): no tallship photographs are in the repo yet. The six
            slots below render as marked placeholders until public/gallery/tallships/1.jpg
            to 6.jpg exist. See src/data/homeImages.js. */}
        <PhotoGallery images={nightWatchImages} />
      </RevealSection>

      <RevealSection id="hands" className="home-section">
        <div className="home-section-header">
          <div className="home-section-title">
            <h2 className="home-heading">hands</h2>
          </div>
          <div className="home-section-body">
            <Verse>{`
              a small series that runs through both.
                hands pinning a hem.
                hands on a line in the dark.
              the work is mostly done by hands,
                and the hands are usually
                  the honest part of the photograph.
            `}</Verse>
          </div>
        </div>
        <PhotoGallery images={handsImages} />
      </RevealSection>

      <RevealSection id="prints" className="home-section home-section--alt">
        <div className="home-section-header">
          <div className="home-section-title">
            <h2 className="home-heading">prints</h2>
          </div>
          <div className="home-section-body">
            <Verse>{`
              prints of selected photographs
                are available through the print room.
            `}</Verse>
            <Link to="/print-room" className="cta-button">
              visit the print room
            </Link>
            {/* TODO (print details): add one line each, below the link, once confirmed.
                Do not guess them.
                - Sizes offered:
                - Editions:
                - Signed or not: */}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="about" className="home-section">
        <div className="home-section-header">
          <div className="home-section-title">
            <h2 className="home-heading">about</h2>
          </div>
          <div className="home-section-body">
            <Verse>{`
              julien clifford, houston, texas.
              photographing fashion since 2018:
                more than ninety runway shows,
                  three published books.
            `}</Verse>
            <Verse>{`
              i run atelier actara,
                which produces fashion shows,
                  so the backstage photographs
                    are taken from inside the work.
              at sea i am crew,
                not a passenger.
              both bodies of work are the same subject,
                in the end:
                  people getting something ready
                    that the audience will only see finished.
            `}</Verse>
            <Verse>{`
              i photograph the space
                where you almost were.
            `}</Verse>
            {/* TODO (CV): a short list of the three book titles and exhibition history
                goes here. Do not invent titles or exhibitions. */}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="contact" className="home-section home-section--alt">
        <div className="home-section-header">
          <div className="home-section-title">
            <h2 className="home-heading">contact</h2>
          </div>
          <div className="home-section-body">
            <p className="home-copy home-verse">
              {'for commissions, exhibitions and prints:\n  '}
              <ContactEmail />
            </p>
            <p className="home-copy">
              instagram:{' '}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                @outsidetheobvious
              </a>
            </p>
            <ContactButton />
          </div>
        </div>
      </RevealSection>
    </>
  );
};

export default Root;
