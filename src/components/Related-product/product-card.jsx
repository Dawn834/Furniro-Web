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

        </div>
    );
}

export default ProductCard;