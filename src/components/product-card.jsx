import { Link } from "react-router-dom";
import shareIcon from "../assets/img/icon/share.svg";
import compareIcon from "../assets/img/icon/compare.svg";
import likeIcon from "../assets/img/icon/like.svg";

function ProductCard({ product }) {

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
            <Link to="/product" className="overlay"></Link>
            <div className="card-overlay">
                <button className="cart-btn btn">Add to cart</button>
                <div className="overlay-actions">
                    <Link to="">
                        <img src={shareIcon} alt="" />  Share
                    </Link>
                    <Link to="/comparison">
                        <img src={compareIcon} alt="" />  Compare
                    </Link>
                    <Link to="">
                        <img src={likeIcon} alt="" /> Like
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;