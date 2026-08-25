import React from "react";
import { Link } from "react-router-dom";
import PoemCanvas from "../components/PoemCanvas";
import printRoomItems from "../data/printRoom";

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
    </div>
  );
};

export default PrintRoom;
