import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  const { state } = useContext(CartContext);

  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <div className="brand">
        <span className="brand-icon">🛍️</span>
        <span>Blush & Bloom</span>
      </div>

      <div className="cart-counter">
        🛒
        <span>{totalItems}</span>
      </div>
    </header>
  );
}

export default Header;