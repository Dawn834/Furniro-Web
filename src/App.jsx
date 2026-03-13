import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
// Pages
import Homepage from "./pages/homepage.jsx";
import Shop from "./pages/shop.jsx";
import ProductPage from "./pages/product-page.jsx";
import Cart from "./pages/cart.jsx";
import CartSidebar from "./pages/cart-sidebar.jsx";
import Checkout from "./pages/checkout.jsx";
import Blog from "./pages/blog.jsx";
import Contact from "./pages/contact.jsx";
import ProductComparison from "./pages/product-comparison.jsx";

function App() {


  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart-sidebar" element={<CartSidebar />} />
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
