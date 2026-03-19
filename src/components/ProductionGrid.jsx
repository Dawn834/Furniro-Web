import ProductCard from "./product-card";
import { Products } from "../data/products";
function ProductionGrid() {

    return <>
        <div className="product-grid">

            {Products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}

        </div>
    </>



}

export default ProductionGrid;