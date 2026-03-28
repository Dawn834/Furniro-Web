import PageHero from "../components/PageHero";
import ShopToolbar from "../components/Shop/ShopToolbar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import ServiceFeatures from "../components/ServiceFeatures";


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