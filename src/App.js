import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Sales } from "./components/Salesbar";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import TopScrollButton from "./components/TopScrollButton";
import SignIn from "./pages/Authentication/SignIn";

import { Error } from "./pages/Error/Error-404";
import { Account } from "./pages/Account";
import { Footer } from "./components/Footer";
// import { Cart } from "./pages/Cart";

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Sales /> */}
        <Navbar />
        <TopScrollButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />

          <Route path="/account" element={<Account />} />
      
            {/* <Route path="/cart" element={<Cart />} /> */}
   

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
