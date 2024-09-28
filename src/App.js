import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
import TopScrollButton from "./components/misc/TopScrollButton";
import { Error } from "./pages/Error/Error-404";
import { Account } from "./pages/account";
import { Footer } from "./components/navigation/Footer";
import { ScrollToTop } from "./components/misc/ScrollTop";
import { About } from "./pages/about/About";
import { Chat } from "./components/misc/Chat";
import { Cart } from "./pages/cart/Cart";
import { Search } from "./pages/search";
import { Chairs } from "./components/products/Chair";
import { Bed } from "./components/products/Bed";
import { Bench } from "./components/products/Bench";
import { Storage } from "./components/products/Storage";
import { Sofa } from "./components/products/Sofa";
import { Table } from "./components/products/Table";
import { Rug } from "./components/products/Rug";
import { Lighting } from "./components/products/Lighting";
import { Dining } from "./components/products/Dining";
import { SignIn } from "./pages/auth/SignIn";
import { SignUp } from "./pages/auth/SignUp";
import { LivingRoom } from "./components/rooms/LivingRoom";
import { Products } from "./components/products/Products";
import { ProductDetails } from "./components/details/ProductDetails";
import { Rooms } from "./components/rooms/Rooms";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
function App() {
  // const cart = useSelector((state) => state.cart);
  // useEffect(() => {
  //   const updateCart = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://meubles-63663-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json",
  //         {
  //           method: "PUT",
  //           body: JSON.stringify(cart),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       const data = await res.json();
  //       console.log("Cart updated:", data);
  //     } catch (error) {
  //       console.error("Error updating cart:", error);
  //     }
  //   };

  //   updateCart();
  // }, [cart]);

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
          {/* <Route path="/search" element={<Search />} /> */}
          {/* Products Routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/chair" element={<Chairs />} />
          <Route path="/beds" element={<Bed />} />
          <Route path="/benches" element={<Bench />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/rug" element={<Rug />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/table" element={<Table />} />
          {/* Details Route */}
          <Route path="/products/:name" element={<ProductDetails />} /> */
          {/* Room Route */}
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
