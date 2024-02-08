import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

import Navbar from "./components/Navbarr";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/home" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
