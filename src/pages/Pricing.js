import React from 'react';
import { Link } from 'react-router-dom';
import pricing from '../data/pricing.json';

const BOOKING_MAILTO =
  'mailto:contact@outsidetheobvious.com?subject=booking%20enquiry';

// The data is written in sentence case for llms.txt; the stylesheet lowercases
// it here. A null price means the work is quoted per brief.
const priceLabel = (price) => price ?? 'On request';

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h1 className="section-title ee-title">
        what it<br />
        &nbsp;&nbsp;costs
      </h1>

      <div className="pricing-list">
        {pricing.services.map((service) => (
          <article className="pricing-item" key={service.id}>
            <div>
              <h2 className="service-title">{service.title}</h2>
              <p className="pricing-price">{priceLabel(service.price)}</p>
            </div>
            <div className="pricing-detail">
              <p className="pricing-summary">{service.summary}</p>
              <ul className="pricing-includes">
                {service.includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <h2 className="section-title ee-title pricing-terms-title">the terms</h2>
      <ul className="pricing-terms">
        {pricing.terms.map((term) => (
          <li key={term}>{term}</li>
        ))}
      </ul>

      <p className="body-text-large ee-text pricing-ask">
        send the dates and the brief<br />
        &nbsp;&nbsp;i answer with a quote
      </p>
      <div className="pricing-actions">
        <a href={BOOKING_MAILTO} className="cta-button cta-button-accent">
          book by email
        </a>
        <Link to="/print-room" className="cta-button">
          visit the print room
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
