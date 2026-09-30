import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  function handleAddToCart() {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  return (
    <div className="product-card">
      <div className="product-image">
        {product.image}
      </div>

      <div className="product-details">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <div className="product-bottom">
          <strong>₹{product.price}</strong>

          <button onClick={handleAddToCart}>
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;