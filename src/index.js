import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

import NavBar from "./components/NavBar";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
const basename = document.querySelector("base")?.getAttribute("href") ?? "/";

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
