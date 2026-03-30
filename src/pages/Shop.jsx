import PageHero from "../components/PageHero";
import ShopToolbar from "../components/Shop/ShopToolbar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import ServiceFeatures from "../components/ServiceFeatures";

import { useState } from "react";


function Shop() {
  // state
  const [viewMode, setViewMode] = useState("grid");

  return (
    <main className="shop-page">

      <PageHero title="Shop" currentPage="Shop" />

      <ShopToolbar viewMode={viewMode} setViewMode={setViewMode} />
      <div className="container layout">
        <ProductGrid viewMode={viewMode} />
      </div>


      <Pagination />

      <ServiceFeatures />

    </main>
  );
}

export default Shop;