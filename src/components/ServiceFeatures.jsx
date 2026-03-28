import serviceFeature1 from "../assets/img/icon/serviceFeature1.svg";
import serviceFeature2 from "../assets/img/icon/serviceFeature2.svg";
import serviceFeature3 from "../assets/img/icon/serviceFeature3.svg";
import serviceFeature4 from "../assets/img/icon/serviceFeature4.svg";

function ServiceFeatures() {
    return (
        <section className="service-features">

            <div className="service-features__grid">

                <div className="feature">
                    <img src={serviceFeature1} alt="High Quality" />
                    <div className="feature__content">
                        <h4>High Quality</h4>
                        <p>crafted from top materials</p>
                    </div>
                </div>

                <div className="feature">
                    <img src={serviceFeature2} alt="Warranty Protection" />
                    <div className="feature__content">
                        <h4>Warranty Protection</h4>
                        <p>Over 2 years</p>
                    </div>
                </div>

                <div className="feature">
                    <img src={serviceFeature3} alt="Free Shipping" />
                    <div className="feature__content">
                        <h4>Free Shipping</h4>
                        <p>Order over 150 $</p>
                    </div>
                </div>

                <div className="feature">
                    <img src={serviceFeature4} alt="24 / 7 Support" />
                    <div className="feature__content">
                        <h4>24 / 7 Support</h4>
                        <p>Dedicated support</p>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default ServiceFeatures;