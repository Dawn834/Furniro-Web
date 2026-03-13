import ProductGallery from "./product-gallery";
import ProductInfo from "./product-info";

function ProductDetail() {
    return (
        <>
            <div className="product-detail">
                <div className="container">
                    <ProductGallery />
                    <ProductInfo />
                </div>

            </div>

        </>
    );
}

export default ProductDetail;