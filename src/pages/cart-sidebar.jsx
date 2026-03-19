import CartSidebarComponent from "../features/cart/CartSidebar";

function CartSidebar() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Cart Sidebar Preview</h1>
      <p>This page demonstrates the Cart Sidebar component in its open state.</p>
      <CartSidebarComponent isOpen={true} onClose={() => {}} />
    </div>
  );
}

export default CartSidebar;
