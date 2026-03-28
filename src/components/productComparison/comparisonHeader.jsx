import { Link } from "react-router-dom";
import { useComparisonStore } from "../../store/useComparisonStore";
import { Products } from "../../data/productData";
import starFilled from "../../assets/img/icon/dashicons_star-filled.svg";
import starHalf from "../../assets/img/icon/carbon_star-half.svg";

function ComparisonHeader() {
    const { comparedProducts, addToComparison, removeFromComparison } = useComparisonStore();

    return (
        <section className="comparison-header">
            <div className="container">
                <div className="comparison-header__grid">

                    {/* Go to product page */}
                    <div className="comparison-header__more">
                        <h3>Go to Product page for more Products</h3>
                        <Link to="/shop" className="comparison-header__view-more">View More</Link>
                    </div>

                    {/* Selected Products */}
                    {comparedProducts.map((product) => (
                        <div className="comparison-header__product" key={product.id}>
                            <button
                                className="comparison-header__remove"
                                onClick={() => removeFromComparison(product.id)}
                            >
                                ×
                            </button>
                            <div className="comparison-header__img">
                                <img src={product.img} alt={product.name} />
                            </div>
                            <h4>{product.name}</h4>
                            <p className="comparison-header__price">{product.price}</p>
                            <div className="comparison-header__rating">
                                <span className="comparison-header__rating-score">{product.rating}</span>
                                <div className="stars">
                                    {[...Array(Math.floor(product.rating))].map((_, i) => (
                                        <img key={i} src={starFilled} alt="" />
                                    ))}
                                    {product.rating % 1 !== 0 && <img src={starHalf} alt="" />}
                                </div>
                                <span className="comparison-header__rating-divider"></span>
                                <span className="comparison-header__rating-reviews">{product.reviewsCount} Review</span>
                            </div>
                        </div>
                    ))}

                    {/* Add a Product (only if less than 3) */}
                    {comparedProducts.length < 3 && (
                        <div className="comparison-header__add">
                            <h4>Add A Product</h4>
                            <select
                                className="comparison-header__select"
                                onChange={(e) => {
                                    const selectedProduct = Products.find(p => p.id === parseInt(e.target.value));
                                    if (selectedProduct) addToComparison(selectedProduct);
                                }}
                                value=""
                            >
                                <option value="" disabled>Choose a Product</option>
                                {Products.filter(p => !comparedProducts.find(cp => cp.id === p.id)).map(product => (
                                    <option key={product.id} value={product.id}>{product.name}</option>
                                ))}
                            </select>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}

export default ComparisonHeader;