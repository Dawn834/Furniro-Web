import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { useComparisonStore } from "../store/useComparisonStore";
import shareIcon from "../assets/img/icon/share.svg";
import compareIcon from "../assets/img/icon/compare.svg";
import likeIcon from "../assets/img/icon/like.svg";
import toast from "react-hot-toast";

function ProductCard({ product }) {
    const addToCart = useCartStore((state) => state.addToCart);
    const addToComparison = useComparisonStore((state) => state.addToComparison);

    return (
        <div className="product-card">
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
                <button className="cart-btn btn" onClick={() => { addToCart(product, 1); toast.success("Đã thêm sản phẩm vào giỏ hàng!"); }} >Add to cart</button>
                <div className="overlay-actions">
                    <Link to="">
                        <img src={shareIcon} alt="" />  Share
                    </Link>
                    <Link
                        to="/comparison"
                        onClick={(e) => {
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