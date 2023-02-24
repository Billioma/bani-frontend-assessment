import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import "./assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr Bold.ttf";
import "./assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr Medium.ttf";
import "./assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr Roman.ttf";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
