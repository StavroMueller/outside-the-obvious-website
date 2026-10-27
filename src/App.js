import React from "react";
import "./App.css";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import merchShopUrl from "./data/merch";

import Root from "./pages/Root";
import Hello from "./pages/Hello";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import PrintRoom from "./pages/PrintRoom";
import Street from "./pages/gallery/Street";
import Fashion from "./pages/gallery/Fashion";
import Travel from "./pages/gallery/Travel";
import FineArt from "./pages/gallery/FineArt";

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <ErrorBoundary>
      <div className="App">
        <HashRouter>
          <a href="#main-content" className="skip-link">
            skip to content
          </a>
          <header>
            <nav className="nav-container" aria-label="main navigation">
              <Link to="/" className="nav-logo">
                outside the obvious
              </Link>
              <button
                className="nav-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="nav-menu"
                aria-label="toggle navigation menu"
              >
                <span className="nav-toggle-bar" />
                <span className="nav-toggle-bar" />
              </button>
              <ul className={`nav-links${menuOpen ? ' nav-links--open' : ''}`} id="nav-menu">
                <li>
                  <Link to="/gallery/fashion" className="nav-link" onClick={() => setMenuOpen(false)}>
                    fashion
                  </Link>
                </li>
                <li>
                  <Link to="/gallery/street" className="nav-link" onClick={() => setMenuOpen(false)}>
                    street
                  </Link>
                </li>
                <li>
                  <Link to="/gallery/travel" className="nav-link" onClick={() => setMenuOpen(false)}>
                    travel
                  </Link>
                </li>
                <li>
                  <Link to="/print-room" className="nav-link" onClick={() => setMenuOpen(false)}>
                    print room
                  </Link>
                </li>
                {merchShopUrl && (
                  <li>
                    <a
                      href={merchShopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() => setMenuOpen(false)}
                    >
                      merch
                    </a>
                  </li>
                )}
                <li>
                  <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                    contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://instagram.com/outsidetheobvious"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link nav-social"
                  >
                    @
                  </a>
                </li>
              </ul>
            </nav>
            {menuOpen && (
              <div
                className="nav-backdrop"
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
              />
            )}
          </header>

          <main id="main-content">
            <Routes>
              <Route path="/" element={<Root />} />
              <Route path="/hello" element={<Hello />} />
              <Route path="/print-room" element={<PrintRoom />} />
              <Route path="/gallery/street" element={<Street />} />
              <Route path="/gallery/fashion" element={<Fashion />} />
              <Route path="/gallery/travel" element={<Travel />} />
              <Route path="/gallery/fine-art" element={<FineArt />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className="footer" role="contentinfo">
            <span className="footer-text">
              outside the obvious
            </span>
            <span className="footer-text">
              fashion & editorial photography
            </span>
            <a
              href="https://instagram.com/outsidetheobvious"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              @outsidetheobvious
            </a>
          </footer>
        </HashRouter>
      </div>
    </ErrorBoundary>
  );
}

export default App;
