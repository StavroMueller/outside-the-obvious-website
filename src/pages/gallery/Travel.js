import React from "react";
import { Link } from "react-router-dom";
import wotoFinder from "../../utilities/wotoFinder";
import Gallery from "../../components/Gallery";

const Travel = () => {
  const wotoUrls = wotoFinder("travel", 24);

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1 className="gallery-title">travel</h1>
        <p className="gallery-subtitle">
          places, faces, stories from the road
        </p>
      </header>
      <Gallery imageUrls={wotoUrls} />
      <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
        <Link to="/contact" className="cta-button">
          work with me
        </Link>
      </div>
    </div>
  );
};

export default Travel;
