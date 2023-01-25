import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CapstoneContextProvider from "./CapstoneContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CapstoneContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CapstoneContextProvider>
  </React.StrictMode>
);
