import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  Switch,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';

import Root from './pages/Root';
import Booking from './pages/Booking';
import About from './pages/About';
import Street from './pages/gallery/Street';
import Fashion from './pages/gallery/Fashion';
import Travel from './pages/gallery/Travel';
import FineArt from './pages/gallery/FineArt';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path ='/' element={<Root />} />
        <Route path ='/about' element={<Root />} />
        <Route path ='/gallery/street' element={<Street />} />
        <Route path ='/gallery/fashion' element={<Fashion />} />
        <Route path ='/gallery/travel' element={<Travel />} />
        <Route path ='/gallery/fine-art' element={<FineArt />} />
        <Route path ='/booking' element={<Booking />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
