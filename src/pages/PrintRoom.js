import React from "react";
import { Link } from "react-router-dom";
import PoemCanvas from "../components/PoemCanvas";
import Newsletter from "../components/Newsletter";
import printRoomItems from "../data/printRoom";
import merchShopUrl from "../data/merch";

const PrintRoom = () => {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1 className="gallery-title">the print room</h1>
        <PoemCanvas
          size="small"
          poem="where moments become objects — take one home with you"
          scatterIntensity={0.2}
        />
        <p className="gallery-subtitle">
          prints & downloads from every show — find yourself in the crowd
        </p>
      </header>

      <div className="print-room-grid">
        {printRoomItems.map((item) => (
          <div className="print-room-item" key={item.id}>
            <h2 className="print-room-title">{item.title}</h2>
            <p className="print-room-meta">
              {item.date} &mdash; {item.location}
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
                gallery coming soon &mdash;{' '}
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
          <p className="print-room-meta">shirts &mdash; hats &mdash; etc.</p>
          <p className="print-room-description">
            take the pictures off the wall and put them on
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
              merch shop coming soon &mdash;{' '}
              <Link to="/contact" className="print-room-inquire-link">
                inquire
              </Link>
            </p>
          )}
        </div>
      </div>

      <Newsletter
        className="newsletter--print-room"
        heading="know when the next one drops"
        blurb="new shows, new prints, new books — before they go up. letters, rarely."
      />
    </div>
  );
};

export default PrintRoom;
