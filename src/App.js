import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import TopScrollButton from "./components/TopScrollButton";
import SignIn from "./pages/Authentication/SignIn";
import Signup from "./pages/Authentication/SignUp";
import { Error } from "./pages/Error/Error-404";
import { Account } from "./pages/Account";
import { Footer } from "./components/Footer";
import { createContext, useState } from "react";
// import { Cart } from "./pages/Cart";
export const AppContext = createContext();
function App() {
  const [username,setUsername] = useState("");
  return (
    <AppContext.Provider value={{username,setUsername}} >
      <div className="App">
        <Router>
          <Navbar />
          <TopScrollButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
