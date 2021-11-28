import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_login from './App_login';
import App_olvide_pas from './App_olvide_pas';
import App_register from './App_register';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<App_login />} />
        <Route path="/olvideContrasena" element={<App_olvide_pas />} />
        <Route path="/register" element={<App_register />} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
