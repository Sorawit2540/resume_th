import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import History from "./History";
import Education from "./Education";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router, Route, Link, browserHistory } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Education />
    <History />
  </React.StrictMode>,
  document.getElementById("root")
);
//<React.StrictMode>
//<App />
//</React.StrictMode>,
//document.getElementById('root')

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
