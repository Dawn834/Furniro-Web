import PageHero from "../components/PageHero";
import ShopToolbar from "../components/Shop/ShopToolbar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import ServiceFeatures from "../components/ServiceFeatures";

import { useState, useMemo } from "react";
import { Products } from "../data/productData";


function Shop() {
  // state
  const [viewMode, setViewMode] = useState("grid");

  // logic pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  // total pages
  const totalPages = Math.ceil(Products.length / productsPerPage);

  // current products
  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return Products.slice(startIndex, startIndex + productsPerPage);
  }, [currentPage]);

  // handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="shop-page">

      <PageHero title="Shop" currentPage="Shop" />

      <ShopToolbar viewMode={viewMode} setViewMode={setViewMode} />
      <div className="container layout">
        <ProductGrid viewMode={viewMode} products={currentProducts} />
      </div>


      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

      <ServiceFeatures />

    </main>
  );
}

export default Shop;