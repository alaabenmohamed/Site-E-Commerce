import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { GlobalStyle } from "./pages/styles/global";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
