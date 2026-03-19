import { Products } from "../../data/products";
import { Link } from "react-router-dom";
import ProductCard from "./product-card";

function RelatedProducts() {

    return (
        <section className="related-products">

            <div className="container">

                <h2 className="related-products__title">
                    Related Products
                </h2>

                <div className="related-products__grid">

                    {Products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

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