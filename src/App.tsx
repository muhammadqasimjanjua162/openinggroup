import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import PropertiesPage from "./pages/PropertiesPage";
import InteractiveMaps from "./pages/InteractiveMaps";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Route for HomePage */}
        <Route path="/properties" element={<PropertiesPage />} />{" "}
        <Route path="/maps" element={<InteractiveMaps />} />{" "}
        {/* Route for PropertiesPage */}
      </Routes>
    </Router>
  );
};

export default App;
