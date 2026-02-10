import "./App.css";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

import Root from "./pages/Root";
import Hello from "./pages/Hello";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Street from "./pages/gallery/Street";
import Fashion from "./pages/gallery/Fashion";
import Travel from "./pages/gallery/Travel";
import FineArt from "./pages/gallery/FineArt";

import LeicaM3 from "./pages/reviews/LeicaM3";
import LeicaX2 from "./pages/reviews/LeicaX2";
import RicohGRIII from "./pages/reviews/RicohGRIII";
import OlympusOMDEM1X from "./pages/reviews/OlympusOMDEM1X";

import Mis from "./pages/books/Mis";
import APoemOfLima from "./pages/books/APoemOfLima";
import MidnightAtMain from "./pages/books/MidnightAtMain";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <HashRouter>
          <nav className="nav-container">
            <Link to="/" className="nav-logo">
              outside the obvious
            </Link>
            <ul className="nav-links">
              <li>
                <Link to="/gallery/fashion" className="nav-link">
                  fashion
                </Link>
              </li>
              <li>
                <Link to="/gallery/street" className="nav-link">
                  street
                </Link>
              </li>
              <li>
                <Link to="/gallery/travel" className="nav-link">
                  travel
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
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

          <main>
            <Routes>
              <Route path="/" element={<Root />} />
              <Route path="/hello" element={<Hello />} />
              <Route path="/gallery/street" element={<Street />} />
              <Route path="/gallery/fashion" element={<Fashion />} />
              <Route path="/gallery/travel" element={<Travel />} />
              <Route path="/gallery/fine-art" element={<FineArt />} />
              <Route path="/reviews/leicam3" element={<LeicaM3 />} />
              <Route path="/reviews/leicax2" element={<LeicaX2 />} />
              <Route path="/reviews/ricohgriii" element={<RicohGRIII />} />
              <Route path="/reviews/olympusomdem1x" element={<OlympusOMDEM1X />} />
              <Route path="/books/mis" element={<Mis />} />
              <Route path="/books/apoemoflima" element={<APoemOfLima />} />
              <Route path="/books/midnightatmain" element={<MidnightAtMain />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className="footer">
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
