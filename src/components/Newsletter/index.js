import React from 'react';
import newsletterConfig from '../../data/newsletter';

const CONTACT_EMAIL = 'contact@outsidetheobvious.com';

// The signup posts straight to the email provider's embed endpoint. That
// endpoint doesn't send CORS headers, so the request goes out as no-cors and
// the response comes back opaque — we can't read the status. A genuine network
// failure still rejects, which is what the catch below is for. Providers
// double opt-in anyway, so "check your inbox" is the honest thing to say: the
// confirmation email is what actually tells someone it worked.
const Newsletter = ({
  className = '',
  heading = 'field notes',
  blurb = 'letters, rarely. new work, new books, the odd print run. no noise.',
}) => {
  const { subscribeUrl, emailField, hiddenFields } = newsletterConfig;
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle');

  // The footer copy and a page's own copy can both be on screen at once, so
  // these ids have to be unique per instance or the labels cross-wire.
  const instanceId = React.useId();
  const inputId = `newsletter-email-${instanceId}`;
  const headingId = `newsletter-heading-${instanceId}`;

  // Nothing to sign up to yet — see src/data/newsletter.js.
  if (!subscribeUrl) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    try {
      await fetch(subscribeUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({ [emailField]: email, ...hiddenFields }),
      });
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className={`newsletter ${className}`.trim()} aria-labelledby={headingId}>
      <h2 className="newsletter-heading" id={headingId}>
        {heading}
      </h2>
      <p className="newsletter-blurb">{blurb}</p>

      {status === 'done' ? null : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor={inputId}>
            your email address
          </label>
          <input
            className="newsletter-input"
            id={inputId}
            type="email"
            name={emailField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            autoComplete="email"
            required
            disabled={status === 'sending'}
          />
          <button className="newsletter-submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'sending' : 'send me letters'}
          </button>
        </form>
      )}

      <p className="newsletter-status" role="status" aria-live="polite">
        {status === 'done' && 'check your inbox — i sent something to confirm it’s you'}
        {status === 'error' && (
          <>
            that didn&rsquo;t go through. write to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="newsletter-status-link">
              {CONTACT_EMAIL}
            </a>{' '}
            and i&rsquo;ll add you myself
          </>
        )}
      </p>
    </section>
  );
};

export default Newsletter;
