import React from "react";
import ReactDOM from "react-dom/client";
import './AppController.css'
import AppController from "./AppController";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppController />
  </React.StrictMode>
);

reportWebVitals();
