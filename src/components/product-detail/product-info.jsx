import { useState } from "react";
import iconStars from "../../assets/img/icon/dashicons_star-filled.svg";
import iconStarsHalf from "../../assets/img/icon/carbon_star-half.svg";
import iconFacebook from "../../assets/img/icon/akar-icons_facebook-fill.svg";
import iconTwitter from "../../assets/img/icon/akar-icons_twitter-fill.svg";
import iconLinkedin from "../../assets/img/icon/akar-icons_linkedin-box-fill.svg";

function ProductInfo() {

    const sizes = ["L", "XL", "XS"];
    const colors = ["purple", "black", "brown"];

    const [size, setSize] = useState("L");
    const [color, setColor] = useState();
    const [qty, setQty] = useState(1);

    return (
        <div className="product-info">

            <h1 className="product-info__title">
                Asgaard sofa
            </h1>

            <p className="product-info__price">
                Rs. 250,000.00
            </p>

            <div className="product-info__rating">
                <div className="product-info__stars">
                    <img src={iconStars} alt="" />
                    <img src={iconStars} alt="" />
                    <img src={iconStars} alt="" />
                    <img src={iconStars} alt="" />
                    <img src={iconStarsHalf} alt="" />
                </div>
                <span>5 Customer Review</span>
            </div>

            <p className="product-info__desc">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

            </p>

            {/* Size */}
            <div className="product-info__option">
                <p className="product-info__label">Size</p>

                <div className="product-info__sizes">
                    {sizes.map((item) => (
                        <button
                            key={item}
                            className={`product-info__size ${size === item ? "active" : ""
                                }`}
                            onClick={() => setSize(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* Color */}
            <div className="product-info__option">
                <p className="product-info__label">Color</p>

                <div className="product-info__colors">
                    {colors.map((item) => (
                        <button
                            key={item}
                            className={`product-info__color ${item} ${color === item ? "active" : ""
                                }`}
                            onClick={() => setColor(item)}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="product-info__actions">

                <div className="product-info__qty">
                    <div className="product-info__qty--layout">
                        <button
                            onClick={() => qty > 1 && setQty(qty - 1)}
                        >
                            -
                        </button>

                        <span>{qty}</span>

                        <button
                            onClick={() => setQty(qty + 1)}
                        >
                            +
                        </button>
                    </div>


                </div>

                <button className="btn btn--primary">
                    Add To Cart
                </button>

                <button className="btn btn--outline">
                    + Compare
                </button>

            </div>

            {/* Meta */}
            <div className="product-info__meta">

                <div className="product-info__meta-row">
                    <span className="product-info__meta-label">SKU</span>
                    <span className="product-info__meta-separator">:</span>
                    <span className="product-info__meta-value">SS001</span>
                </div>

                <div className="product-info__meta-row">
                    <span className="product-info__meta-label">Category</span>
                    <span className="product-info__meta-separator">:</span>
                    <span className="product-info__meta-value">Sofas</span>
                </div>

                <div className="product-info__meta-row">
                    <span className="product-info__meta-label">Tags</span>
                    <span className="product-info__meta-separator">:</span>
                    <span className="product-info__meta-value">
                        Sofa, Chair, Home, Shop
                    </span>
                </div>

                <div className="product-info__meta-row">
                    <span className="product-info__meta-label">Share</span>
                    <span className="product-info__meta-separator">:</span>
                    <span className="product-info__meta-value">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={iconFacebook} alt="facebook" />
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={iconLinkedin} alt="linkedin" />
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={iconTwitter} alt="twitter" />
                        </a>
                    </span>
                </div>

            </div>

        </div>
    );
}

export default ProductInfo;