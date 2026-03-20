import PageHero from "../components/pageHero";
import ServiceFeatures from "../components/serviceFeatures";
import sofa1 from "../assets/img/product/sofa1.png"; // Placeholder for cart item
import removeIcon from "../assets/img/icon/remove-icon.svg";

function Cart() {
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
              <tr>
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
              </tr>
            </tbody>
          </table>
        </div>

        <aside className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="cart-totals__row">
            <span>Subtotal</span>
            <span className="price--sub">Rs. 250,000.00</span>
          </div>
          <div className="cart-totals__row">
            <span>Total</span>
            <span className="price--total">Rs. 250,000.00</span>
          </div>
          <button className="btn btn--outline cart-checkout-btn">
            Check Out
          </button>
        </aside>
      </div>

      <ServiceFeatures />
    </main>
  );
}

export default Cart;