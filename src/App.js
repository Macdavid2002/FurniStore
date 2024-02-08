import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/home";
import TopScrollButton from "./components/TopScrollButton";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <TopScrollButton />
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
