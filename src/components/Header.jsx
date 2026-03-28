// link file
import "../assets/styles/components/_header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartSidebar from "../features/cart/CartSidebar";
import { useCartStore } from "../store/useCartStore";

// img
import logo from "../assets/img/logo-furniro.svg";
import userIcon from "../assets/img/header/Vector.svg";
import searchIcon from "../assets/img/header/akar-icons_search.svg";
import heartIcon from "../assets/img/header/akar-icons_heart.svg";
import cartIcon from "../assets/img/header/ant-design_shopping-cart-outlined.svg";

function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartItemCount = useCartStore((state) => state.cartItems.length);
    return (
        <>
            <header className="header">
                <div className="header__container">

                    {/* Logo */}
                    <Link to="/" className="header__logo">
                        <img
                            src={logo}
                            alt="Furniro"
                            className="header__logo-img"
                        />
                        <span className="header__logo-text">Furniro</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="header__nav">
                        <ul className="header__menu">
                            <li className="header__menu-item">
                                <Link to="/" className="header__menu-link">
                                    Home
                                </Link>
                            </li>

                            <li className="header__menu-item">
                                <Link to="/shop" className="header__menu-link">Shop</Link>
                            </li>

                            <li className="header__menu-item">
                                <Link to="/blog" className="header__menu-link">About</Link>
                            </li>

                            <li className="header__menu-item">
                                <Link to="/contact" className="header__menu-link">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Actions */}
                    <div className="header__actions">

                        <button className="header__action-btn">
                            <img src={userIcon} alt="user" />
                        </button>

                        <button className="header__action-btn">
                            <img src={searchIcon} alt="search" />
                        </button>

                        <button className="header__action-btn">
                            <Link to="/" className="header__menu-link">
                                <img src={heartIcon} alt="wishlist" />
                            </Link>
                        </button>

                        <button className="header__action-btn" onClick={() => setIsCartOpen(true)}  >
                            <img src={cartIcon} alt="cart" />
                            {cartItemCount > 0 && (
                                <span className="header__actions-cart-badge">{cartItemCount}</span>
                            )}
                        </button>

                    </div>

                </div>
            </header>

            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}

export default Header;