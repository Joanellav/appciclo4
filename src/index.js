
import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(<App />, document.getElementById("root"));
