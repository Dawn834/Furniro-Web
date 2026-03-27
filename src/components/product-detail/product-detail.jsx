import ProductGallery from "./product-gallery";
import ProductInfo from "./product-info";

function ProductDetail({ product }) {
    return (
        <>
            <div className="product-detail">
                <div className="container">
                    <ProductGallery product={product} />
                    <ProductInfo product={product} />
                </div>

            </div>

        </>
    );
}

export default ProductDetail;