import { useState } from "react";
import { useCartStore } from "../../store/useCartStore";
import iconStars from "../../assets/img/icon/dashicons_star-filled.svg";
import iconStarsHalf from "../../assets/img/icon/carbon_star-half.svg";
import iconFacebook from "../../assets/img/icon/akar-icons_facebook-fill.svg";
import iconTwitter from "../../assets/img/icon/akar-icons_twitter-fill.svg";
import iconLinkedin from "../../assets/img/icon/akar-icons_linkedin-box-fill.svg";

function ProductInfo({ product }) {
    const defaultSize = product.sizes?.[0] || "L";
    const defaultColor = product.colors?.[0] || "";

    const [size, setSize] = useState(defaultSize);
    const [color, setColor] = useState(defaultColor);
    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(false);

    const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);

    const handleAddToCart = () => {
        setLoading(true); // Bật trạng thái xoay (loading) cho nút
        addToCart(product, qty); // Gọi action thêm sản phẩm vào giỏ hàng cục bộ

        // Giả lập thời gian chờ để tạo hiệu ứng mượt mà (700ms)
        setTimeout(() => {
            setLoading(false); // Tắt trạng thái loading
            setIsCartOpen(true); // Kích hoạt mở Sidebar giỏ hàng từ Store
        }, 700);
    };

    // 1. Lấy hàm addToCart từ Store
    const addToCart = useCartStore((state) => state.addToCart);
    return (
        <div className="product-info">

            <h1 className="product-info__title">
                {product.name}
            </h1>

            <p className="product-info__price">
                {product.price}
            </p>

            <div className="product-info__rating">
                <div className="product-info__stars">
                    {/* Simplified dynamic stars based on product.rating */}
                    {[...Array(5)].map((_, i) => (
                        <img
                            key={i}
                            src={i < Math.floor(product.rating) ? iconStars : iconStarsHalf}
                            alt=""
                        />
                    ))}
                </div>
                <span>{product.reviewsCount} Customer Review</span>
            </div>

            <p className="product-info__desc">
                {product.desc}
            </p>

            {/* Size */}
            {product.sizes && (
                <div className="product-info__option">
                    <p className="product-info__label">Size</p>

                    <div className="product-info__sizes">
                        {product.sizes.map((item) => (
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
            )}

            {/* Color */}
            {product.colors && (
                <div className="product-info__option">
                    <p className="product-info__label">Color</p>

                    <div className="product-info__colors">
                        {product.colors.map((item) => (
                            <button
                                key={item}
                                className={`product-info__color ${color === item ? "active" : ""
                                    }`}
                                style={{ backgroundColor: item }}
                                onClick={() => setColor(item)}
                            ></button>
                        ))}
                    </div>
                </div>
            )}

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

                <button className={`btn btn--primary ${loading ? "btn-loading" : ""} `}
                    onClick={handleAddToCart}
                    disabled={loading}
                >
                    {loading && (
                        <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.4 31.4" stroke-linecap="round" opacity="0.25" />
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.4 31.4" stroke-dashoffset="15" stroke-linecap="round" />
                        </svg>
                    )}
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
                    <span className="product-info__meta-value">{product.sku}</span>
                </div>

                <div className="product-info__meta-row">
                    <span className="product-info__meta-label">Category</span>
                    <span className="product-info__meta-separator">:</span>
                    <span className="product-info__meta-value">{product.category}</span>
                </div>

                <div className="product-info__meta-row">
                    <span className="product-info__meta-label">Tags</span>
                    <span className="product-info__meta-separator">:</span>
                    <span className="product-info__meta-value">
                        {product.tags?.join(", ")}
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

        </div >
    );
}

export default ProductInfo;