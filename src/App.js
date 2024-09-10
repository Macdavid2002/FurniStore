import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import TopScrollButton from "./components/TopScrollButton";
import SignIn from "./pages/Authentication/SignIn";
import { Error } from "./pages/Error/Error-404";
import { Account } from "./pages/account";
import { Footer } from "./components/Footer";
import { ChairDetails } from "./details/Chairdetails";
import { BedDetails } from "./details/BedDetails";
import { BenchDetails } from "./details/BenchDetails";
import { DiningDetails } from "./details/DiningDetails";
import { LightingDetails } from "./details/LightingDetails";
import { RugDetails } from "./details/RugDetails";
import { SofaDetails } from "./details/SofaDetails";
import { StorageDetails } from "./details/StorageDetails";
import { TableDetails } from "./details/TableDetails";
import { ScrollToTop } from "./components/ScrollTop";
import { About } from "./pages/about";
import { Chair } from "./products/chair";
import { Chat } from "./components/Chat";
import { Bed } from "./products/bed";

// import { Cart } from "./pages/Cart";
import { Bench } from "./products/bench";
import { Dining } from "./products/dining";
import { Lighting } from "./products/lighting";
import { Rugs } from "./products/rugs";
import { Sofa } from "./products/sofa";
import { Storage } from "./products/storage";
import { Table } from "./products/table";
import { Search } from "./components/search";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Chat />
        <TopScrollButton />
        <Routes>
          {/* Pages Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/account" element={<Account />} />
          <Route path="/search" element={<Search />} />
          {/* Products Routes */}
          <Route path="/chair" element={<Chair />} />
          <Route path="/beds" element={<Bed />} />
          <Route path="/benches" element={<Bench />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/rug" element={<Rugs />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/table" element={<Table />} />
          {/* Details Route */}
          <Route path="/chair/:name" element={<ChairDetails />} />
          <Route path="/bed/:name" element={<BedDetails />} />
          <Route path="/bench/:name" element={<BenchDetails />} />
          <Route path="/dining/:name" element={<DiningDetails />} />
          <Route path="/lighting/:name" element={<LightingDetails />} />
          <Route path="/rug/:name" element={<RugDetails />} />
          <Route path="/sofa/:name" element={<SofaDetails />} />
          <Route path="/storage/:name" element={<StorageDetails />} />
          <Route path="/table/:name" element={<TableDetails />} />

          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
