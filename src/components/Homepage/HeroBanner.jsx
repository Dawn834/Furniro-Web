import Button from "../Button"
function HeroBanner() {

    return (
        <section className="hero">

            <div className="hero__container">

                <div className="hero__content">

                    <span>New Arrival</span>

                    <h1>Discover Our New Collection</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>

                    <Button to="/shop" variant="primary" >
                        BUY NOW
                    </Button>

                </div>

            </div>

        </section>
    );

}

export default HeroBanner;