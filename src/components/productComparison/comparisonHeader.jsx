import { Link } from "react-router-dom";
import sofa1 from "../../assets/img/product/sofa1.png";
import sofa2 from "../../assets/img/product/sofa2.png";
import starFilled from "../../assets/img/icon/dashicons_star-filled.svg";
import starHalf from "../../assets/img/icon/carbon_star-half.svg";

function ComparisonHeader() {
    return (
        <section className="comparison-header">
            <div className="container">
                <div className="comparison-header__grid">

                    {/* Go to product page */}
                    <div className="comparison-header__more">
                        <h3>Go to Product page for more Products</h3>
                        <Link to="/shop" className="comparison-header__view-more">View More</Link>
                    </div>

                    {/* Product 1 */}
                    <div className="comparison-header__product">
                        <div className="comparison-header__img">
                            <img src={sofa1} alt="Asgaard Sofa" />
                        </div>
                        <h4>Asgaard Sofa</h4>
                        <p className="comparison-header__price">Rs. 250,000.00</p>
                        <div className="comparison-header__rating">
                            <span className="comparison-header__rating-score">4.7</span>
                            <div className="stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starHalf} alt="" />
                            </div>
                            <span className="comparison-header__rating-divider"></span>
                            <span className="comparison-header__rating-reviews">204 Review</span>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="comparison-header__product">
                        <div className="comparison-header__img">
                            <img src={sofa2} alt="Outdoor Sofa Set" />
                        </div>
                        <h4>Outdoor Sofa Set</h4>
                        <p className="comparison-header__price">Rs. 224,000.00</p>
                        <div className="comparison-header__rating">
                            <span className="comparison-header__rating-score">4.2</span>
                            <div className="stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starHalf} alt="" />
                            </div>
                            <span className="comparison-header__rating-divider"></span>
                            <span className="comparison-header__rating-reviews">145 Review</span>
                        </div>
                    </div>

                    {/* Add a Product */}
                    <div className="comparison-header__add">
                        <h4>Add A Product</h4>
                        <select className="comparison-header__select">
                            <option>Choose a Product</option>
                            <option>Asgaard Sofa</option>
                            <option>Outdoor Sofa Set</option>
                        </select>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ComparisonHeader;