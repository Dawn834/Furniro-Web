import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import Homepage from "./pages/Homepage.jsx";
import Shop from "./pages/Shop.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import ProductComparison from "./pages/ProductComparison.jsx";

import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comparison" element={<ProductComparison />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
