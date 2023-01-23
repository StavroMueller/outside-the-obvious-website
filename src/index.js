import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';

import Root from './pages/Root';
import Booking from './pages/Booking';
import Street from './pages/gallery/Street';
import Fashion from './pages/gallery/Fashion';
import Travel from './pages/gallery/Travel';
import FineArt from './pages/gallery/FineArt';

import LeicaM3 from './pages/reviews/LeicaM3';
import LeicaX2 from './pages/reviews/LeicaX2';
import RicohGRIII from './pages/reviews/RicohGRIII';
import OlympusOMDEM1X from './pages/reviews/OlympusOMDEM1X';

import Mis from './pages/books/Mis';
import APoemOfLima from './pages/books/APoemOfLima';
import MidnightAtMain from './pages/books/MidnightAtMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
const basename = document.querySelector('base')?.getAttribute('href') ?? '/'

root.render(
  <React.StrictMode>
    <HashRouter baseName={basename}>
      <NavBar />
      <Routes>
        <Route path ='/' element={<Root />} />
        <Route path ='/gallery/street' element={<Street />} />
        <Route path ='/gallery/fashion' element={<Fashion />} />
        <Route path ='/gallery/travel' element={<Travel />} />
        <Route path ='/gallery/fine-art' element={<FineArt />} />
        <Route path ='/reviews/leicam3' element={<LeicaM3 />} />
        <Route path ='/reviews/leicax2' element={<LeicaX2 />} />
        <Route path ='/reviews/ricohgriii' element={<RicohGRIII />} />
        <Route path ='/reviews/olympusomdem1x' element={<OlympusOMDEM1X />} />
        <Route path ='/books/mis' element={<Mis />} />
        <Route path ='/books/apoemoflima' element={<APoemOfLima />} />
        <Route path ='/books/midnightatmain' element={<MidnightAtMain />} />
        <Route path ='/booking' element={<Booking />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
