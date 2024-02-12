import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./context/index";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <Router>
        <App />
      </Router>
    </ModalProvider>
  </React.StrictMode>
);
