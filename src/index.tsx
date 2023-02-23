import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr Bold.ttf";
import "./assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr Medium.ttf";
import "./assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr Roman.ttf";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
