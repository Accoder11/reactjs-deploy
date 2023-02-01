import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
// import './css/index.css';
// import './css/styles.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Router>
      <App />
    </Router>
    </React.StrictMode>
  );

  reportWebVitals();