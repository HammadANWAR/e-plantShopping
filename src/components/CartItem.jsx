import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-item-info">
        <h2>{item.name}</h2>

        <p>
          Unit Price: ${item.price.toFixed(2)}
        </p>

        <div className="quantity-controls">
          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
            disabled={item.quantity === 1}
          >
            −
          </button>

          <strong>{item.quantity}</strong>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>
        </div>

        <p>
          Total: $
          {(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          className="delete-button"
          onClick={() =>
            dispatch(removeFromCart(item.id))
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;