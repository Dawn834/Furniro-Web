import Button from "../components/button"

import HeroBanner from "../components/homepage/HeroBanner";
import BrowseRange from "../components/homepage/BrowseRange";
import ProductGrid from "../components/ProductGrid";
import InspirationSection from "../components/homepage/Inspiration";
import FurnitureGallery from "../components/homepage/FurnitureGallery";

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