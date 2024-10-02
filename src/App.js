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
import { Contact } from "./pages/Contact";
import { SignUp } from "./pages/auth/SignUp";
// Products
import { Products } from "./components/products/all-products/Products";
import { ProductTwo } from "./components/products/all-products/ProductsTwo";
import { ProductThree } from "./components/products/all-products/ProductThree";
import { ProductDetails } from "./components/details/ProductDetails";
import { ProductFour } from "./components/products/all-products/ProductFour";
import { ProductFive } from "./components/products/all-products/ProductFive";
import { ProductSix } from "./components/products/all-products/ProductSix";
import { ProductSeven } from "./components/products/all-products/ProductSeven";
// Rooms
import { LivingRoom } from "./components/rooms/LivingRoom";
import { BedRoom } from "./components/rooms/BedRoom";
import { DiningRoom } from "./components/rooms/DiningRoom";
import { HomeOffice } from "./components/rooms/HomeOffice";
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
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          {/* Products Routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/2" element={<ProductTwo />} />
          <Route path="/products/3" element={<ProductThree />} />
          <Route path="/products/4" element={<ProductFour />} />
          <Route path="/products/5" element={<ProductFive />} />
          <Route path="/products/6" element={<ProductSix />} />
          <Route path="/products/7" element={<ProductSeven />} />
          {/* Product Category Routes*/}
          <Route path="/chair" element={<Chairs />} />
          <Route path="/beds" element={<Bed />} />
          <Route path="/benches" element={<Bench />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/rug" element={<Rug />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/table" element={<Table />} />
          {/* Product Details Route */}
          <Route path="/products/:name" element={<ProductDetails />} /> */
          {/* Rooms Route */}
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/bedroom" element={<BedRoom />} />
          <Route path="/dining-room" element={<DiningRoom />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
