import Button from "../components/Button"

import HeroBanner from "../components/Homepage/HeroBanner";
import BrowseRange from "../components/Homepage/BrowseRange";
import ProductGrid from "../components/ProductGrid";
import InspirationSection from "../components/Homepage/Inspiration";
import FurnitureGallery from "../components/Homepage/FurnitureGallery";

function Homepage() {
  return <>
    <div className="Homepage">
      <HeroBanner />
      <BrowseRange />
      <section className="product-section container">

        <h2>Our Products</h2>

        <ProductGrid />

        <div className="product-section__btn">

          <Button to="/shop" variant="outline" >
            BUY NOW
          </Button>

        </div>

      </section>

      <InspirationSection />
      <FurnitureGallery />
    </div>
  </>
}


export default Homepage;