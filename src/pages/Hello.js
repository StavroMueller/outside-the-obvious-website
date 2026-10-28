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
        standing
          touching
            curious`;

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Julien Clifford
N:Clifford;Julien;;;
ORG:Outside The Obvious
TITLE:Fashion & Editorial Photographer
URL:https://outsidetheobvious.com
X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/outsidetheobvious
NOTE:Fashion and editorial photographer, Houston. Runway and backstage since 2018.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'julien-clifford.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
          &nbsp;&nbsp;i photograph fashion shows<br />
          &nbsp;&nbsp;&nbsp;&nbsp;from backstage
        </p>
        <div className="hello-buttons" style={{ marginTop: '2rem' }}>
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
          <button
            onClick={downloadVCard}
            className="cta-button cta-button-outline"
          >
            save my contact
          </button>
        </div>
      </section>

      {/* what i do - quick overview */}
      <section className="hello-grid">
        <Link to="/gallery/fashion" className="hello-card">
          <span className="hello-card-title">fashion</span>
          <span className="hello-card-sub">
            runway and backstage<br />
            since 2018
          </span>
        </Link>

        <Link to="/gallery/street" className="hello-card">
          <span className="hello-card-title">streets</span>
          <span className="hello-card-sub">
            people<br />
            in the street
          </span>
        </Link>

        <Link to="/gallery/travel" className="hello-card">
          <span className="hello-card-title">travel</span>
          <span className="hello-card-sub">
            away<br />
            from home
          </span>
        </Link>

        <Link to="/" className="hello-card">
          <span className="hello-card-title">books</span>
          <span className="hello-card-sub">
            three<br />
            2022 to 2024
          </span>
        </Link>
      </section>

      {/* currently */}
      <section className="hello-now">
        <span className="hello-now-label">currently</span>
        <span className="hello-now-text">
          shooting in houston, sailing out of galveston
        </span>
      </section>

      {/* footer note */}
      <section className="hello-footer">
        <p className="hello-small">
          thanks for scanning
        </p>
      </section>
    </div>
  );
};

export default Hello;
