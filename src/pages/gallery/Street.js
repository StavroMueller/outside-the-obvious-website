import React from "react";
import { Link } from "react-router-dom";
import wotoFinder from "../../utilities/wotoFinder";
import Gallery from "../../components/Gallery";
import PoemCanvas from "../../components/PoemCanvas";

const Street = () => {
  const wotoUrls = wotoFinder("street", 16);

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1 className="gallery-title">street</h1>
        <PoemCanvas
          size="small"
          poem="the city breathes in strangers passing through its veins"
          scatterIntensity={0.2}
        />
      </header>
      <Gallery imageUrls={wotoUrls} genre="street" />
      <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
        <Link to="/contact" className="cta-button">
          book a session
        </Link>
      </div>
    </div>
  );
};

export default Street;
