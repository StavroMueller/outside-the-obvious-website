import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { HashRouter, Link, Routes, Route } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

import Root from "./pages/Root";
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

const basename = document.querySelector("base")?.getAttribute("href") ?? "/";

function App() {
  return (
    <div className="App">
      <HashRouter baseName={basename}>
        <Grid container>
          <Grid size={3}>
            <Tabs orientation="vertical">
              <Tab component={Header}></Tab>
              <Tab component={Link} label="Home" to="/"></Tab>
              <Tab component={Link} label="Fashion" to="/gallery/fashion"></Tab>
              <Tab component={Link} label="Street" to="/gallery/street"></Tab>
              <Tab component={Link} label="Travel" to="/gallery/travel"></Tab>
              <Tab component={Link} label="Fine art" to="/gallery/art"></Tab>
              <Tab component={Link} label="Contact" to="/contact"></Tab>
              <Tab component={Link} label="Reviews" to="/reviews"></Tab>
            </Tabs>
          </Grid>
          <Grid size={9}>
            <Routes>
              <Route path="/" element={<Root />} />
              <Route path="/gallery/street" element={<Street />} />
              <Route path="/gallery/fashion" element={<Fashion />} />
              <Route path="/gallery/travel" element={<Travel />} />
              <Route path="/gallery/fine-art" element={<FineArt />} />
              <Route path="/reviews/leicam3" element={<LeicaM3 />} />
              <Route path="/reviews/leicax2" element={<LeicaX2 />} />
              <Route path="/reviews/ricohgriii" element={<RicohGRIII />} />
              <Route
                path="/reviews/olympusomdem1x"
                element={<OlympusOMDEM1X />}
              />
              <Route path="/books/mis" element={<Mis />} />
              <Route path="/books/apoemoflima" element={<APoemOfLima />} />
              <Route
                path="/books/midnightatmain"
                element={<MidnightAtMain />}
              />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Grid>
        </Grid>
      </HashRouter>
    </div>
  );
}

function Header() {
  return <Typography variant="h6">Julien Clifford</Typography>;
}

export default App;
