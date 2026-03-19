import ProductCard from "./product-card";
import { Products } from "../data/products";

function ProductGrid({ products }) {
    const displayProducts = products || Products;

    return (
        <div className="product-grid">
            {displayProducts.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default ProductGrid;
