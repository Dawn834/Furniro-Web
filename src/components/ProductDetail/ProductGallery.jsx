import { useState } from "react";

function ProductGallery({ product }) {

    const images = [product.img, product.img, product.img, product.img];

    const [mainImage, setMainImage] = useState(product.img);



    return (
        <div className="product-gallery">

            <div className="product-gallery__thumbs">
                {images.map((img, index) => (
                    <button
                        key={index}
                        className="product-gallery__thumbs-item"
                        onClick={() => setMainImage(img)}
                    >
                        <img
                            src={img}
                            alt=""
                        />
                    </button>
                ))}
            </div>

            <div className="product-gallery__main">
                <img src={mainImage} alt="" />
            </div>

        </div>
    );
}

export default ProductGallery;