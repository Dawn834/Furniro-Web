import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

function ProductDetail({ product }) {
    return (
        <>
            <div className="product-detail">
                <div className="container">
                    <ProductGallery product={product} key={product.id} />
                    <ProductInfo product={product} />
                </div>

            </div>

        </>
    );
}

export default ProductDetail;