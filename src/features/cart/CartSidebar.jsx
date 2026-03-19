import { Link } from "react-router-dom";
import cartIcon from "../../assets/img/header/ant-design_shopping-cart-outlined.svg";
import product1 from "../../assets/img/product/sofa1.png";
import product2 from "../../assets/img/product/sofa2.png";

function CartSidebar({ isOpen, onClose }) {
    if (!isOpen) return null;

    const cartItems = [
        {
            id: 1,
            name: "Asgaard sofa",
            price: "Rs. 250,000.00",
            quantity: 1,
            image: product1
        },
        {
            id: 2,
            name: "Casaliving Wood",
            price: "Rs. 270,000.00",
            quantity: 1,
            image: product2
        }
    ];

    return (
        <div className="cart-sidebar-overlay" onClick={onClose}>
            <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
                <div className="cart-sidebar__header">
                    <h2 className="cart-sidebar__title">Shopping Cart</h2>
                    <img src={cartIcon} alt="Cart" className="cart-sidebar__icon" />
                </div>

                <div className="cart-sidebar__divider"></div>

                <div className="cart-sidebar__items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item__image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cart-item__info">
                                <h3 className="cart-item__name">{item.name}</h3>
                                <p className="cart-item__price">
                                    <span className="quantity">{item.quantity}</span> x <span className="price">{item.price}</span>
                                </p>
                            </div>
                            <button className="cart-item__remove">
                                <span>✕</span>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-sidebar__footer">
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span className="amount">Rs. 520,000.00</span>
                    </div>
                    <div className="cart-sidebar__divider"></div>
                    <div className="cart-sidebar__actions">
                        <Link to="/cart" className="btn btn--outline-dark">Cart</Link>
                        <Link to="/checkout" className="btn btn--outline-dark">Checkout</Link>
                        <Link to="/comparison" className="btn btn--outline-dark">Comparison</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartSidebar;
