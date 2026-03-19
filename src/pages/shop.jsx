import PageHero from "../components/pageHero";
import ShopToolbar from "../components/shop/shopTool";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/pagination";
import ServiceFeatures from "../components/serviceFeatures";

import { Products } from "../data/products";

function Shop() {
  return (
    <main className="shop-page">

      <PageHero title="Shop" currentPage="Shop" />

      <ShopToolbar />
      <div className="container layout">
        <ProductGrid />
        <ProductGrid />
      </div>


      <Pagination />

      <ServiceFeatures />

    </main>
  );
}

export default Shop;