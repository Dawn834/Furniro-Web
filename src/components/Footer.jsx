import "../assets/styles/components/_footer.scss";
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">

                {/* Brand */}
                <div className="footer__brand">
                    <a className="footer__logo" href="/">
                        Funiro.
                    </a>

                    <p className="footer__address">
                        400 University Drive Suite 200 Coral Gables,
                        <br />
                        FL 33134 USA
                    </p>
                </div>

                {/* Links */}
                <div className="footer__links">
                    <h1 className="footer__title">Links</h1>

                    <ul className="footer__list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/blog">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Help */}
                <div className="footer__help">
                    <h1 className="footer__title">Help</h1>

                    <ul className="footer__list">
                        <li><a href="#">Payment Options</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Privacy Policies</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer__newsletter">
                    <h1 className="footer__title">Newsletter</h1>

                    <form className="footer__form">
                        <input 
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="footer__input"
                        />
                        <button className="footer__subscribe">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom */}
            <div className="footer__bottom container">
                <p>2023 funiro. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;