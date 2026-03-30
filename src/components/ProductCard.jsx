import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartStore } from "../store/useCartStore";
import { useComparisonStore } from "../store/useComparisonStore";
import shareIcon from "../assets/img/icon/share.svg";
import compareIcon from "../assets/img/icon/compare.svg";
import likeIcon from "../assets/img/icon/like.svg";

function ProductCard({ product, viewMode }) {
    const addToCart = useCartStore((state) => state.addToCart);
    const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);
    const addToComparison = useComparisonStore((state) => state.addToComparison);
    const [loading, setLoading] = useState(false);

    const handleAddToCart = () => {
        setLoading(true); // Bật trạng thái xoay (loading) cho nút
        addToCart(product, 1); // Gọi action thêm sản phẩm vào giỏ hàng cục bộ

        // Giả lập thời gian chờ để tạo hiệu ứng mượt mà (700ms)
        setTimeout(() => {
            setLoading(false); // Tắt trạng thái loading
            setIsCartOpen(true); // Kích hoạt mở Sidebar giỏ hàng từ Store
        }, 700);
    };

    return (
        <div className={`product-card ${viewMode === 'list' ? 'product-card--list' : ''}`}>
            <div className="product-card__img">
                {product.badge && (
                    <span
                        className={
                            product.badge.includes("%")
                                ? "product-card__badge product-card__badge--sale"
                                : "product-card__badge product-card__badge--new"
                        }
                    >
                        {product.badge}
                    </span>
                )}

                <img src={product.img} alt="" />

            </div>

            <div className="product-card__info">

                <h3>{product.name}</h3>

                <p>{product.desc}</p>

                <div className="product-card__price">

                    <span className="price">
                        {product.price}
                    </span>

                    {product.oldPrice && (
                        <span className="old-price">
                            {product.oldPrice}
                        </span>
                    )}

                </div>

            </div>

            {/* Lớp Overlay */}
            <Link to={`/product/${product.id}`} className="overlay"></Link>
            <div className="card-overlay">
                <button
                    className={`cart-btn btn ${loading ? "btn-loading" : ""}`}
                    onClick={handleAddToCart}
                >
                    {loading && (
                        <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.4 31.4" stroke-linecap="round" opacity="0.25" />
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.4 31.4" stroke-dashoffset="15" stroke-linecap="round" />
                        </svg>
                    )}
                    Add to cart
                </button>
                <div className="overlay-actions">
                    <Link to="">
                        <img src={shareIcon} alt="" />  Share
                    </Link>
                    <Link
                        to="/comparison"
                        onClick={() => {
                            addToComparison(product);
                        }}
                    >
                        <img src={compareIcon} alt="" />  Compare
                    </Link>
                    <Link to="">
                        <img src={likeIcon} alt="" /> Like
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default ProductCard;