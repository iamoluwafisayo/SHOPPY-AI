import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeToggleProvider } from "./contexts/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeToggleProvider>
  </React.StrictMode>
);
