import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const [couponCode, setCouponCode] = useState("");
  const [message, setMessage] = useState("");

  const subtotal = state.cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const discountPercentage = state.coupon
    ? state.coupon.discount
    : 0;

  const discount =
    (subtotal * discountPercentage) / 100;

  const amountAfterDiscount = subtotal - discount;

  const gst = amountAfterDiscount * 0.18;

  const grandTotal = amountAfterDiscount + gst;

  function handleCoupon() {
    const code = couponCode.trim().toUpperCase();

    if (code === "SAVE10") {
      dispatch({
        type: "APPLY_COUPON",
        payload: {
          code: "SAVE10",
          discount: 10,
        },
      });

      setMessage("🎀 10% discount applied!");
    } else if (code === "SAVE20") {
      dispatch({
        type: "APPLY_COUPON",
        payload: {
          code: "SAVE20",
          discount: 20,
        },
      });

      setMessage("🌸 20% discount applied!");
    } else {
      setMessage("❌ Invalid coupon code");
    }
  }

  function handleRemoveCoupon() {
    dispatch({
      type: "REMOVE_COUPON",
    });

    setCouponCode("");
    setMessage("");
  }

  return (
    <section className="cart-section">
      <div className="section-title">
        <span>♡</span>
        <h2>Your Shopping Bag</h2>
        <span>♡</span>
      </div>

      {state.cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">🛍️</div>

          <h3>Your bag is feeling lonely!</h3>

          <p>
            Add something cute from our collection.
          </p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {state.cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <div className="summary-card">
            <h3>Order Summary ✨</h3>

            <div className="coupon-box">
              <label>🎟️ Have a coupon?</label>

              <div className="coupon-row">
                <input
                  type="text"
                  placeholder="SAVE10"
                  value={couponCode}
                  onChange={(e) =>
                    setCouponCode(e.target.value)
                  }
                  disabled={state.coupon !== null}
                />

                {state.coupon ? (
                  <button
                    className="remove-coupon"
                    onClick={handleRemoveCoupon}
                  >
                    Remove
                  </button>
                ) : (
                  <button onClick={handleCoupon}>
                    Apply
                  </button>
                )}
              </div>

              <small>
                Try SAVE10 or SAVE20
              </small>

              {message && (
                <p className="coupon-message">
                  {message}
                </p>
              )}
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>
                ₹{subtotal.toFixed(2)}
              </strong>
            </div>

            <div className="summary-row discount-row">
              <span>
                Discount
                {state.coupon &&
                  ` (${discountPercentage}%)`}
              </span>

              <strong>
                - ₹{discount.toFixed(2)}
              </strong>
            </div>

            <div className="summary-row">
              <span>GST (18%)</span>

              <strong>
                ₹{gst.toFixed(2)}
              </strong>
            </div>

            <div className="summary-divider"></div>

            <div className="grand-total">
              <span>Grand Total</span>

              <strong>
                ₹{grandTotal.toFixed(2)}
              </strong>
            </div>

            <button className="checkout-button">
              💕 Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;