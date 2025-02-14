import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import PropertiesPage from "./pages/PropertiesPage";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Route for HomePage */}
        <Route path="/properties" element={<PropertiesPage />} />{" "}
        {/* Route for PropertiesPage */}
      </Routes>
    </Router>
  );
};

export default App;
