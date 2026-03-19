function CartSidebar() {
    return (
        <aside className="cart-sidebar">

            <div className="cart-sidebar__header">
                <h2>Shopping Cart</h2>
                <button className="cart-sidebar__close">×</button>
            </div>

            <div className="cart-sidebar__list">

                <div className="cart-item">

                    <img
                        className="cart-item__img"
                        src="/img/product/gallery1.png"
                        alt=""
                    />

                    <div className="cart-item__info">

                        <h4 className="cart-item__name">
                            Asgaard sofa
                        </h4>

                        <div className="cart-item__price">
                            <span>1</span>
                            <span>x</span>
                            <span className="cart-item__amount">
                                Rs. 250,000.00
                            </span>
                        </div>

                    </div>

                    <button className="cart-item__remove">
                        ×
                    </button>

                </div>


                <div className="cart-item">

                    <img
                        className="cart-item__img"
                        src="/img/product/gallery2.png"
                        alt=""
                    />

                    <div className="cart-item__info">

                        <h4 className="cart-item__name">
                            Casaliving Wood
                        </h4>

                        <div className="cart-item__price">
                            <span>1</span>
                            <span>x</span>
                            <span className="cart-item__amount">
                                Rs. 270,000.00
                            </span>
                        </div>

                    </div>

                    <button className="cart-item__remove">
                        ×
                    </button>

                </div>

            </div>


            <div className="cart-sidebar__subtotal">

                <span>Subtotal</span>

                <strong>Rs. 520,000.00</strong>

            </div>


            <div className="cart-sidebar__actions">

                <button className="btn-outline">
                    Cart
                </button>

                <button className="btn-outline">
                    Checkout
                </button>

                <button className="btn-outline">
                    Comparison
                </button>

            </div>

        </aside>
    );
}

export default CartSidebar;