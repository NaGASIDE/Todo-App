import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./App";
import { HashRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  root
);
