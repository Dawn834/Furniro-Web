import ProductCard from "./ProductCard";
import { Products } from "../data/productData";

function ProductGrid({ products, viewMode, limit }) {
    const displayProducts = limit
        ? (products || Products).slice(0, limit) : (products || Products);

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
