import React from "react";
import { Link } from "react-router-dom";
import wotoFinder from "../../utilities/wotoFinder";
import Gallery from "../../components/Gallery";
import PoemCanvas from "../../components/PoemCanvas";

const Fashion = () => {
  const wotoUrls = wotoFinder("fashion", 13);

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1 className="gallery-title">fashion</h1>
        <PoemCanvas
          size="small"
          poem="fabric falls like whispered secrets between skin and silk"
          scatterIntensity={0.2}
        />
      </header>
      <Gallery imageUrls={wotoUrls} genre="fashion" />
      <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
        <Link to="/contact" className="cta-button">
          book a fashion shoot
        </Link>
      </div>
    </div>
  );
};

export default Fashion;
