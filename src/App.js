import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import TopScrollButton from "./components/TopScrollButton";
import SignIn from "./pages/Authentication/SignIn";
import { Error } from "./pages/Error/Error-404";
import { Account } from "./pages/Account";
import { Footer } from "./components/Footer";
import { ChairDetails } from "./details/Chairddetails";
import { BedDetails } from "./details/BedDetails";
import { BenchDetails } from "./details/BenchDetails";
import { DiningDetails } from "./details/DiningDetails";
import { LightingDetails } from "./details/LightingDetails";
import { RugDetails } from "./details/RugDetails";
import { SofaDetails } from "./details/SofaDetails";
import { StorageDetails } from "./details/StorageDetails";
import { TableDetails } from "./details/TableDetails";
import { ScrollToTop } from "./components/ScrollTop";
// import { Cart } from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <TopScrollButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/account" element={<Account />} />
          <Route path="/chair/:id" element={<ChairDetails />} />
          <Route path="/bed/:id" element={<BedDetails />} />
          <Route path="/bench/:id" element={<BenchDetails />} />
          <Route path="/dining/:id" element={<DiningDetails />} />
          <Route path="/lighting/:id" element={<LightingDetails />} />
          <Route path="/rug/:id" element={<RugDetails />} />
          <Route path="/sofa/:id" element={<SofaDetails />} />
          <Route path="/storage/:id" element={<StorageDetails />} />
          <Route path="/table/:id" element={<TableDetails />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
