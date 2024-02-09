import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/home";
import TopScrollButton from "./components/TopScrollButton";
import Login from "./components/Login";
import Signup from "./components/sign-up";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <TopScrollButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}  />
          <Route path="/signup" element={<Signup />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
