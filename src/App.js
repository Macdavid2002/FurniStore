import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
import TopScrollButton from "./components/misc/TopScrollButton";
import SignIn from "./features/auth/SignIn";
import { Error } from "./pages/Error/Error-404";
import { Account } from "./pages/account";
import { Footer } from "./components/navigation/Footer";
import { ChairDetails } from "./components/details/ChairDetails";
import { BedDetails } from "./components/details/BedDetails";
import { BenchDetails } from "./components/details/BenchDetails";
import { DiningDetails } from "./components/details/DiningDetails";
import { LightingDetails } from "./components/details/LightingDetails";
import { RugDetails } from "./components/details/RugDetails";
import { SofaDetails } from "./components/details/SofaDetails";
import { StorageDetails } from "./components/details/StorageDetails";
import { TableDetails } from "./components/details/TableDetails";
import { ScrollToTop } from "./components/misc/ScrollTop";
import { About } from "./pages/about/about";
import { Chat } from "./components/misc/Chat";
import { Cart } from "./features/cart/Cart";
import { Search } from "./pages/search";
import { Chairs } from "./components/product-props/Chair";
import { Beds } from "./components/product-props/Bed";
import { Benches } from "./components/product-props/Bench";
import { Storages } from "./components/product-props/Storage";
import { Sofas } from "./components/product-props/Sofa";
import { Tables } from "./components/product-props/Table";
import { Rug } from "./components/product-props/Rug";
import { Light } from "./components/product-props/Lighting";
import { Dinings } from "./components/product-props/Dining";
import SignUp from "./features/auth/SignUp";
import { LivingRooms } from "./components/room-props/Living-room";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const updateCart = async () => {
      try {
        const res = await fetch(
          "https://meubles-63663-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();
        console.log("Cart updated:", data);
      } catch (error) {
        console.error("Error updating cart:", error);
      }
    };

    updateCart();
  }, [cart]);

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
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/search" element={<Search />} />
          {/* Products Routes */}
          <Route path="/chair" element={<Chairs />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/benches" element={<Benches />} />
          <Route path="/dining" element={<Dinings />} />
          <Route path="/lighting" element={<Light />} />
          <Route path="/rug" element={<Rug />} />
          <Route path="/sofa" element={<Sofas />} />
          <Route path="/storage" element={<Storages />} />
          <Route path="/table" element={<Tables />} />
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
          {/* Room Route */}
          <Route path="/living-room" element={<LivingRooms />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
