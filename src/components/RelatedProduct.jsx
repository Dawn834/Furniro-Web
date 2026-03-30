import { Products } from "../data/productData";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductGrid from "../components/ProductGrid";

function RelatedProducts() {

    return (
        <section className="related-products">

            <div className="container">

                <h2 className="related-products__title">
                    Related Products
                </h2>

                <ProductGrid limit={4} />

                <Link to="/shop" className="related-products__btn ">
                    <button type="button" className="btn btn--outline">
                        Show More
                    </button>
                </Link>

            </div>

        </section>
    );
}

export default RelatedProducts;