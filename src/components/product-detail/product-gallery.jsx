import { useState } from "react";

import gallery1 from "../../assets/img/product/gallery1.png";
import gallery2 from "../../assets/img/product/gallery2.png";
import gallery3 from "../../assets/img/product/gallery3.png";
import gallery4 from "../../assets/img/product/gallery4.png";

function ProductGallery() {

    const images = [gallery1, gallery2, gallery3, gallery4];

    const [mainImage, setMainImage] = useState(images[0]);

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