import { Link, useNavigate } from "react-router-dom";
import cartIcon from "../../assets/img/header/ant-design_shopping-cart-outlined.svg";
import { useCartStore } from "../../store/useCartStore";
import { useComparisonStore } from "../../store/useComparisonStore";

function CartSidebar({ isOpen, onClose }) {
    const cartItems = useCartStore((state) => state.cartItems);
    const removeCart = useCartStore((state) => state.removeCart);
    const syncFromCart = useComparisonStore((state) => state.syncFromCart);
    const navigate = useNavigate();

    const handleComparison = () => {
        if (cartItems.length > 3) {
            alert("Bạn chỉ có thể so sánh tối đa 3 sản phẩm.");
            return;
        }
        // Nếu thỏa mãn (<= 3 loại), thực hiện đồng bộ và chuyển trang
        syncFromCart(cartItems);
        onClose();
        navigate("/comparison");
    }


    if (!isOpen) return null;

    // Tính tổng tiền động
    const subtotal = cartItems.reduce((total, product) => {
        return total + (product.numericPrice * product.quantity);
    }, 0);

    return (
        <div className="cart-sidebar-overlay" onClick={onClose}>
            <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
                <div className="cart-sidebar__header">
                    <h2 className="cart-sidebar__title">Shopping Cart</h2>
                    <img src={cartIcon} alt="Cart" className="cart-sidebar__icon" />
                </div>

                <div className="cart-sidebar__divider"></div>

                <div className="cart-sidebar__items">
                    {cartItems.length === 0 ? (
                        <p style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                            Your cart is empty!
                        </p>
                    ) : (
                        cartItems.map((product) => (
                            <div key={product.id} className="cart-item">
                                <div className="cart-item__image">
                                    <img src={product.img} alt={product.name} />
                                </div>
                                <div className="cart-item__info">
                                    <h3 className="cart-item__name">{product.name}</h3>
                                    <p className="cart-item__price">
                                        <span className="quantity">{product.quantity}</span> x{" "}
                                        <span className="price">
                                            Rp {product.numericPrice?.toLocaleString()}
                                        </span>
                                    </p>
                                </div>
                                <button
                                    className="cart-item__remove"
                                    onClick={() => removeCart(product.id)}
                                >
                                    <span>✕</span>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-sidebar__footer">
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span className="amount">Rp {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="cart-sidebar__divider"></div>
                    <div className="cart-sidebar__actions">
                        <Link to="/cart" onClick={onClose} className="btn btn--outline-dark">
                            Cart
                        </Link>
                        <Link to="/checkout" onClick={onClose} className="btn btn--outline-dark">
                            Checkout
                        </Link>
                        <button
                            onClick={handleComparison}
                            className="btn btn--outline-dark"
                        >
                            Comparison
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartSidebar;
