import ProductCard from "./ProductCard";
import { Products } from "../data/productData";

function ProductGrid({ products, viewMode }) {
    const displayProducts = products || Products;

    return (
        <div className={`product-grid ${viewMode === 'list' ? 'product-grid--list' : ''}`}>
            {displayProducts.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                />
            ))}
        </div>
    );
}

export default ProductGrid;
