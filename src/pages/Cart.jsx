import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore"; // Import store
import PageHero from "../components/PageHero";
import ServiceFeatures from "../components/ServiceFeatures";
import removeIcon from "../assets/img/icon/remove-icon.svg";

function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeCart = useCartStore((state) => state.removeCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const total = cartItems.reduce((sum, product) => sum + product.numericPrice * product.quantity, 0);
  return (
    <main className="cart-page">
      <PageHero title="Cart" currentPage="Cart" />

      <div className="container cart-container">
        <div className="cart-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td className="cart-table__img">
                  <img src={sofa1} alt="Asgaard sofa" />
                </td>
                <td className="cart-table__name">
                  Asgaard sofa
                </td>
                <td>Rs. 250,000.00</td>
                <td>
                  <input type="number" defaultValue={1} min={1} className="cart-qty-input" />
                </td>
                <td className="cart-table__subtotal">Rs. 250,000.00</td>
                <td>
                  <button className="cart-delete-btn">
                    <img src={removeIcon} alt="Remove item" />
                  </button>
                </td>
              </tr> */}
              {cartItems.map((product) => (
                <tr key={product.id}>
                  <td className="cart-table__img">
                    <img src={product.img} alt={product.name} />
                  </td>
                  <td className="cart-table__name">
                    {product.name}
                  </td>
                  <td>Rs. {product.numericPrice?.toLocaleString()}</td>
                  <td>
                    <input type="number" value={product.quantity} onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 0)} min={1} className="cart-qty-input" />
                  </td>
                  <td className="cart-table__subtotal">
                    Rp {(product.numericPrice * product.quantity).toLocaleString()}
                  </td>
                  <td className="cart-delete-btn" onClick={() => removeCart(product.id)}>
                    <img src={removeIcon} alt="Remove item" />
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <aside className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="cart-totals__row">
            <span>Subtotal</span>
            <span className="price--sub">Rs {total.toLocaleString()}</span>
          </div>
          <div className="cart-totals__row">
            <span>Total</span>
            <span className="price--total">Rs {total.toLocaleString()}</span>
          </div>
          <Link to="/checkout">
            <button className="btn btn--outline cart-checkout-btn">
              Check Out
            </button>
          </Link>
        </aside>
      </div>

      <ServiceFeatures />
    </main>
  );
}

export default Cart;