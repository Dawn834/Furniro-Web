import PageHero from "../components/pageHero";
import ShopToolbar from "../components/shop/shopTool";
import ProductionGrid from "../components/ProductionGrid";
import Pagination from "../components/pagination";
import ServiceFeatures from "../components/serviceFeatures";

import { Products } from "../data/products";

function Shop() {
  return (
    <main className="shop-page">

      <PageHero title="Shop" currentPage="Shop" />

      <ShopToolbar />
      <div className="container layout">
        <ProductionGrid products={Products} />
        <ProductionGrid products={Products} />
      </div>


      <Pagination />

      <ServiceFeatures />

    </main>
  );
}

export default Shop;