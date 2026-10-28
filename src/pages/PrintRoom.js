import React from "react";
import { Link } from "react-router-dom";
import PoemCanvas from "../components/PoemCanvas";
import printRoomItems from "../data/printRoom";
import merchShopUrl from "../data/merch";

const PrintRoom = () => {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1 className="gallery-title">the print room</h1>
        <PoemCanvas
          size="small"
          poem="prints and downloads from the shows i have photographed"
          scatterIntensity={0.2}
        />
        <p className="gallery-subtitle">
          if you were at the show, you may be in here
        </p>
      </header>

      <div className="print-room-grid">
        {printRoomItems.map((item) => (
          <div className="print-room-item" key={item.id}>
            <h2 className="print-room-title">{item.title}</h2>
            <p className="print-room-meta">
              {item.date}, {item.location}
            </p>
            <p className="print-room-description">{item.description}</p>
            {item.galleryUrl ? (
              <a
                href={item.galleryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                view & buy photos
              </a>
            ) : (
              <p className="print-room-coming-soon">
                gallery coming soon.{' '}
                <Link to="/contact" className="print-room-inquire-link">
                  inquire
                </Link>
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="print-room-grid">
        <div className="print-room-item">
          <h2 className="print-room-title">the wearables</h2>
          <p className="print-room-meta">shirts, hats, etc.</p>
          <p className="print-room-description">
            the photographs, printed on shirts and hats
          </p>
          {merchShopUrl ? (
            <a
              href={merchShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              visit the merch shop
            </a>
          ) : (
            <p className="print-room-coming-soon">
              merch shop coming soon.{' '}
              <Link to="/contact" className="print-room-inquire-link">
                inquire
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrintRoom;
