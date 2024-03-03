import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { ThemeToggleProvider } from "./contexts/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <CssBaseline>
        <Router>
          <App />
        </Router>
      </CssBaseline>
    </ThemeToggleProvider>
  </React.StrictMode>
);
