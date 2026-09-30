import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        {item.image}
      </div>

      <div className="cart-item-details">
        <h3>{item.name}</h3>

        <p>₹{item.price} each</p>

        <div className="quantity-box">
          <button
            onClick={() =>
              dispatch({
                type: "DECREASE_QUANTITY",
                payload: item.id,
              })
            }
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch({
                type: "INCREASE_QUANTITY",
                payload: item.id,
              })
            }
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item-total">
        <strong>
          ₹{(item.price * item.quantity).toFixed(2)}
        </strong>

        <button
          className="delete-button"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: item.id,
            })
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;