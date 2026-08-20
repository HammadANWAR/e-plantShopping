import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1 className="cart-title">
          Your Shopping Cart
        </h1>

        <h2>Your cart is empty.</h2>

        <Link
          to="/plants"
          className="continue-button"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">
        Your Shopping Cart
      </h1>

      {cartItems.map((item) => {
        const itemTotal =
          item.price * item.quantity;

        return (
          <div
            className="cart-item"
            key={item.id}
          >
            {/* Plant thumbnail */}
            <img
              src={item.image}
              alt={item.name}
            />

            <div className="cart-item-info">
              {/* Plant name */}
              <h2>{item.name}</h2>

              {/* Unit price */}
              <p>
                Unit Price: $
                {item.price.toFixed(2)}
              </p>

              {/* Total cost for this plant */}
              <p>
                Item Total: $
                {itemTotal.toFixed(2)}
              </p>

              {/* Quantity controls */}
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    handleDecrease(item)
                  }
                  disabled={item.quantity === 1}
                >
                  −
                </button>

                <span>
                  Quantity: {item.quantity}
                </span>

                <button
                  onClick={() =>
                    handleIncrease(item)
                  }
                >
                  +
                </button>
              </div>

              {/* Delete button */}
              <button
                className="delete-button"
                onClick={() =>
                  handleDelete(item.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}

      {/* Cart total */}
      <div className="cart-summary">
        <h2>
          Total Cart Amount: $
          {totalAmount.toFixed(2)}
        </h2>

        {/* Checkout */}
        <button
          className="checkout-button"
          onClick={handleCheckout}
        >
          Checkout
        </button>

        {/* Continue shopping */}
        <Link
          to="/plants"
          className="continue-button"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default CartItem;