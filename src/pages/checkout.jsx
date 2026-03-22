import { Link } from "react-router-dom";
import PageHero from "../components/pageHero";
import ServiceFeatures from "../components/serviceFeatures";

function Checkout() {
  return (
    <main className="checkout-page">
      <PageHero title="Checkout" currentPage="Checkout" />

      <div className="container checkout-container">

        <div className="checkout-billing">
          <h2>Billing details</h2>
          <form className="billing-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-group">
              <label>Company Name (Optional)</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Country / Region</label>
              <div className="select-wrapper">
                <select>
                  <option>Sri Lanka</option>
                </select>
                <svg className="select-icon" width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L10 9.5L19 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="form-group">
              <label>Street address</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Town / City</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Province</label>
              <div className="select-wrapper">
                <select>
                  <option>Western Province</option>
                </select>
                <svg className="select-icon" width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L10 9.5L19 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="form-group">
              <label>ZIP code</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Additional information" />
            </div>
          </form>
        </div>

        <div className="checkout-order">
          <div className="order-summary">
            <div className="order-summary__header">
              <h3>Product</h3>
              <h3>Subtotal</h3>
            </div>
            <div className="order-summary__item">
              <span className="product-name">Asgaard sofa <span>x 1</span></span>
              <span className="product-price">Rs. 250,000.00</span>
            </div>
            <div className="order-summary__subtotal">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="order-summary__total">
              <span>Total</span>
              <span className="total-price">Rs. 250,000.00</span>
            </div>
          </div>

          <div className="payment-methods">
            <div className="payment-method">
              <input type="radio" id="bank" name="payment" defaultChecked />
              <label htmlFor="bank" className="method-title">Direct Bank Transfer</label>
              <p className="method-desc">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
            </div>
            <div className="payment-method">
              <input type="radio" id="direct" name="payment" />
              <label htmlFor="direct" className="method-label">Direct Bank Transfer</label>
            </div>
            <div className="payment-method">
              <input type="radio" id="cod" name="payment" />
              <label htmlFor="cod" className="method-label">Cash On Delivery</label>
            </div>
          </div>

          <p className="privacy-policy">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link className="privacy-link" to="/">privacy policy.</Link>
          </p>

          <button className="btn btn--outline place-order-btn">
            Place order
          </button>
        </div>

      </div>

      <ServiceFeatures />
    </main>
  );
}

export default Checkout;    