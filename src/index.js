import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// for the curious
console.log(
  '%c\n  somewhere between the code and the screen\n  lives a truth that doesn\'t know its name\n\n  — outsidetheobvious.com\n',
  'font-family: Georgia, serif; font-size: 14px; color: #d4c4a8; line-height: 1.8;'
);
