import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1 className="cart-title">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="cart-summary">
          <p>Your cart is currently empty.</p>

          <Link to="/plants">
            <button className="continue-button">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

          <div className="cart-summary">
            <h2>
              Total Cart Amount: $
              {totalAmount.toFixed(2)}
            </h2>

            <button
              className="checkout-button"
              onClick={() =>
                alert("Coming Soon")
              }
            >
              Checkout
            </button>

            <Link to="/plants">
              <button className="continue-button">
                Continue Shopping
              </button>
            </Link>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;