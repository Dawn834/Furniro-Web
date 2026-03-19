function ComparisonHeader() {
    return (
        <section className="comparison-header">

            <div className="container">

                <div className="comparison-header__grid">

                    <div className="comparison-header__more">
                        <h3>Go to Product page for more Products</h3>
                        <a href="#">View More</a>
                    </div>

                    <div className="comparison-header__product">

                        <img
                            src="/src/assets/img/product/gallery1.png"
                            alt=""
                        />

                        <h4>Asgaard Sofa</h4>

                        <p>Rs. 250,000.00</p>

                        <div className="comparison-header__rating">
                            4.7 ★★★★★
                        </div>

                    </div>


                    <div className="comparison-header__product">

                        <img
                            src="/src/assets/img/product/gallery2.png"
                            alt=""
                        />

                        <h4>Outdoor Sofa Set</h4>

                        <p>Rs. 224,000.00</p>

                        <div className="comparison-header__rating">
                            4.2 ★★★★☆
                        </div>

                    </div>


                    <div className="comparison-header__add">

                        <h4>Add A Product</h4>

                        <select>
                            <option>Choose a Product</option>
                        </select>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ComparisonHeader;