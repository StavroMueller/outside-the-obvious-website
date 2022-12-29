import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';

import Root from './pages/Root';
import Street from './pages/gallery/Street';
import Fashion from './pages/gallery/Fashion';
import FineArt from './pages/gallery/FineArt';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/store",
    element: <p>something</p>
  },
  {
    path: "/about",
    element: <p>something</p>
  },
  {
    path: "/gallery/street",
    element: <Street />
  },
  {
    path: "/gallery/fashion",
    element: <Fashion />
  },
  {
    path: "/gallery/fine-art",
    element: <FineArt />
  },
  {
    path: "/booking",
    element: <p>something</p>
  }
])

root.render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
