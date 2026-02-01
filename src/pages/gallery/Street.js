import React from "react";
import { Link } from "react-router-dom";
import wotoFinder from "../../utilities/wotoFinder";
import Gallery from "../../components/Gallery";

const Street = () => {
  const wotoUrls = wotoFinder("street", 16);

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1 className="gallery-title">street</h1>
        <p className="gallery-subtitle">
          candid moments, urban energy, real life
        </p>
      </header>
      <Gallery imageUrls={wotoUrls} />
      <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
        <Link to="/contact" className="cta-button">
          book a session
        </Link>
      </div>
    </div>
  );
};

export default Street;
