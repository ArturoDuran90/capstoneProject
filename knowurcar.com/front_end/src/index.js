import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppController from "./AppController";
import App from './App';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppController /> */}
    <App />
  </React.StrictMode>
);

reportWebVitals();
