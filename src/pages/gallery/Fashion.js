import React from "react";
import { Link } from "react-router-dom";
import wotoFinder from "../../utilities/wotoFinder";
import Gallery from "../../components/Gallery";

const Fashion = () => {
  const wotoUrls = wotoFinder("fashion", 13);

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1 className="gallery-title">fashion</h1>
        <p className="gallery-subtitle">
          editorial spreads, lookbooks, campaign work
        </p>
      </header>
      <Gallery imageUrls={wotoUrls} />
      <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
        <Link to="/contact" className="cta-button">
          book a fashion shoot
        </Link>
      </div>
    </div>
  );
};

export default Fashion;
